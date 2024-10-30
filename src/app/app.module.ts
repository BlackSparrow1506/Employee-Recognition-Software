import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavbarComponent } from './pages/Partials/navbar/navbar.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './page/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    NavbarComponent,
    EmployeeCreateComponent,
    ConfirmDialogComponent,
    EmpListComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,

    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatFormFieldModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
