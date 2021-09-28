import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee [] = [];

  constructor(private employeeService: EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe((data : Employee []) =>{
      console.log(data);
      this.employees = data;
    })
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }

}
