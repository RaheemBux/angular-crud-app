import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8080/testsapphire';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTYzMjc0MjIxOTAyMCwicGVybWlzc2lvbnMiOltdLCJleHAiOjE2MzMzNDcwMTl9.-gZvjaZ4hiflk7hBRm0_rWYoHnB7wMybBnaxVKHFWj83QcN0IN_Y8d-8-gOawQwn4Dyq-1dY6jVKDFY48xkdpA' })
  };

  constructor(private http:HttpClient) { } 

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee []>(`${this.baseURL}`+'/employee/getAll',this.httpOptions);
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.baseURL}`+'/employee/create',employee,this.httpOptions);
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}`+'/employee/delete/'+id,this.httpOptions);
  }
  getEmployee(id:number):Observable<Employee>{
    return this.http.get(`${this.baseURL}`+'/employee/view/'+id,this.httpOptions);
  }
  updateEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.baseURL}`+'/employee/update',employee,this.httpOptions);
  }
  
}
