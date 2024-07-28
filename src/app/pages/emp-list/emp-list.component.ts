import { Component, OnInit, NgModule } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  
  filters = {
    name: '',
    designation: '',
    email: '',
    phone: ''
  }
  
  userForm: FormGroup;
  addEmp: any[] = [];
  item: any;
  isEdit: boolean = false;
  form: any;

   // Pagination properties
   currentPage: number = 1;
   itemsPerPage: number = 10;
   pagesInterval: number = 5;
   totalPages: number = 0; // Total number of pages

   //picture +
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private service: CommonService, public dialog: MatDialog, private toastr: ToastrService) {
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(9), this.alphanumericValidator]],
      designation: [""],
      email: [""],
      phone: ["", [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

 // Custom validator function for alphanumeric validation
 alphanumericValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const value = control.value;
  const valid = /^[a-zA-Z\s]*$/.test(value); // Regular expression for alphanumeric validation
  return valid ? null : { 'alphanumeric': true }; // Return null if valid, otherwise return an object with 'alphanumeric' key
}

// Validation check

isAlphanumeric(input: string): boolean {
  return /^[a-zA-Z\s]+$/.test(input);
}

isNameValid(name: string): boolean {
  return /^[a-zA-Z\s]+$/.test(name);
}

isNumeric(input: string): boolean {
  return /^[0-9]+$/.test(input);
}

isPhoneValid(phone: string): boolean {
  return /^[0-9]+$/.test(phone);
}


  // Convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe(data => {
      console.log('addEmp', data);
      this.addEmp = data;
    });
  }

  get filteredRecords() {
    return this.paginatedRecords.filter(item =>
      (item.name ? item.name.toLowerCase().includes(this.filters.name.toLowerCase()) : false) &&
      (item.designation ? item.designation.toLowerCase().includes(this.filters.designation.toLowerCase()) : false) &&
      (item.email ? item.email.toLowerCase().includes(this.filters.email.toLowerCase()) : false) &&
      (item.phone ? item.phone.toLowerCase().includes(this.filters.phone.toLowerCase()) : false)
    );
  }

  DeleteUsersById(ID: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this record?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.DeleteUsersById(ID).subscribe({
          next: data => {
            this.toastr.success('Record deleted successfully!', 'Success');
            this.GetAllUsers();
          },
          error: err => {
            this.toastr.error('Failed to delete the record', 'Error');
          },
          complete: () => {
            console.log('Deletion process completed');
          }
        });
      }
    });
  }

  EditEmp(item: any) {
    item.isEdit = true;
  }

  SaveEmp(item: any) {
    item.isEdit = false;
    this.service.UpdateEmp(item).subscribe({
      next: response => {
        console.log('employee updated successfully', response);
        this.GetAllUsers();
      },
      error: error => {
        console.error('Error updating item', error);
      }
    });
  }

  
 // Handle file selection
 updateEmployee(item: any) {
  item.isEdit = false;

  if (this.selectedFile) {
    this.service.uploadImage(this.selectedFile).subscribe({
      next: () => {
        // Generate URL based on some logic, e.g., predefined server path
        item.picture = `https://server.com/images/${this.selectedFile.name}`;
        this.SaveEmp(item);
      },
      error: (error) => {
        console.error('Error uploading image', error);
      }
    });
  } else {
    this.SaveEmp(item);
  }
}

onFileSelected(event: any, item: any): void {
  const file: File = event.target.files[0];
  if (file) {
    const fileType = file.type.toLowerCase();
    if (fileType === 'image/jpeg' || fileType === 'image/png') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        item.pictureUrl = e.target.result; // Preview the image
      };
      reader.readAsDataURL(file);
      this.selectedFile = file;
      item.fileError = false;
    } else {
      this.selectedFile = null;
      item.fileError = true;
    }
  }}

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form not valid');
    }
  }

    // Pagination methods
  get paginatedRecords(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.addEmp.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.addEmp.length / this.itemsPerPage);
    const pages = [];

    const startPage = Math.floor((this.currentPage - 1) / this.pagesInterval) * this.pagesInterval + 1;
    const endPage = Math.min(startPage + this.pagesInterval - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.addEmp.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  firstPage() {
    this.currentPage = 1;
  }

  lastPage() {
    this.currentPage = this.totalPages;
  }

}
