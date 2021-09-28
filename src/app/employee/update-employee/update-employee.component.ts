import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  
  id:number=0;
  
  constructor(private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data=>{
      this.employee = data;
    })
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.employee).subscribe(response=>{
      console.log('Response ',response);
      this.router.navigate(['/employee']);
    })
  }

}
