import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login' },
  {path: 'home', component: HomePageComponent, title: 'Welcome to home page' },
  {path: 'contact-us', component: ContactPageComponent, title:'Welcome to contact page'},
  {path: 'about-us', component: AboutPageComponent, title: 'Welcome to about page'},
  {path: 'emp-list', component :EmpListComponent, title: 'Welcome to emp list'},
  {path: 'add-emp', component: EmployeeCreateComponent, title: 'Welcome to emp create'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
