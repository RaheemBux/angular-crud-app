import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee : Employee = new Employee();
  id:number=0;
  departments: Department [] = [];
  constructor(private employeeService : EmployeeService,
     private router : Router,
     private route : ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.departments = [
      {"id":1,"name":"HR"},
      {"id":2,"name":"Software Development"},
      {"id":3,"name":"Accounts"},
      {"id":4,"name":"Business Management"},
      {"id":5,"name":"Operations"}
    ];
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data=>{
      this.employee = data;
    })
  }

  saveEmployee(){
    if(this.employee.id){
      this.employeeService.updateEmployee(this.employee).subscribe(data=>{
        console.log(data);           
      });

    }else{
      this.employeeService.createEmployee(this.employee).subscribe(data=>{
        console.log(data);  
        
      });
    }
    this.router.navigate(['/employee']);
   
  }
  onSubmit(){
    console.log("Departmnent ",this.employee.department);
    this.saveEmployee();
  }

}
