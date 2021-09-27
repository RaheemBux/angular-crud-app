import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'employee',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:EmployeeComponent
  },
  {
    path:'create-employee',
    component:CreateEmployeeComponent
  },
  {
    path:'update-employee/:id',
    component:UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
