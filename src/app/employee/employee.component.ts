import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { PaginationParams } from '../util/paginationParams';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee [] = [];

  paginationParams : PaginationParams = new PaginationParams();

  constructor(private employeeService: EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.getAllEmployeesWithPagination(this.paginationParams);
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
    this.router.navigate(['create-employee',id]);
  }
  getAllEmployeesWithPagination(params:any){
    this.employeeService.getAllWithPagination(params).subscribe(response =>{
      this.paginationParams.totalItems = response.totalElements;
      this.employees = response.data;
    });
  }
  pageChange(page:number){
    this.paginationParams.currentPage = page-1;
    this.getAllEmployeesWithPagination(this.paginationParams);
    this.paginationParams.currentPage = page;
  }

}
