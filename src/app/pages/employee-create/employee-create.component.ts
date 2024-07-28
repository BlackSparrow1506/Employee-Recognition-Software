import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  userForm: any;
  addEmp: any;
  GetAllUsers: any;
  selectedFile: File | null = null;
item: any;


  constructor (public fb:FormBuilder, private service:CommonService){
    this.userForm =  this.fb.group({
      name: ["", [Validators.required, Validators.minLength(9), this.alphanumericValidator]],
      designation:  [""],
      email:  ["", [Validators.required]],
      phone:  ["", [Validators.required, Validators.min(1), Validators.max(100)]],
      picture: [""]

    })
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


//picture +
// onFileSelected(event: any,item: any): void {
//   const file: File = event.target.files[0];
//   if (file) {
//     this.selectedFile = file;
//     this.userForm.patchValue({
//       picture: file.name
      
//     });
//     this.userForm.reset();
//   }

// }

onFileSelected(event: any, item: any): void {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      item.pictureUrl = e.target.result; // Preview the image
    };
    reader.readAsDataURL(file);
    this.selectedFile = file;
  }
}


  saveEmployee(){
    console.log(this.userForm.value)

    this.service.AddUpdateUser(this.userForm.value).subscribe(data=>{
      alert("Data Added");
      this.userForm.reset();
      this.GetAllUsers();
      console.log(data);
    })
  }

}
