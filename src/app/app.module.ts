import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
