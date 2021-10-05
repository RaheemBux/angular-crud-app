import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { PaginationResponse } from '../util/paginationResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8080/testsapphire';

  private token = localStorage.getItem('token');

  httpHeader = {
    headers: new HttpHeaders(
      { 
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    )
  };

  constructor(private http:HttpClient) { } 

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee []>(`${this.baseURL}`+'/employee/getAll',this.httpHeader);
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.baseURL}`+'/employee/create',employee,this.httpHeader);
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}`+'/employee/delete/'+id,this.httpHeader);
  }
  getEmployee(id:number):Observable<Employee>{
    return this.http.get(`${this.baseURL}`+'/employee/view/'+id,this.httpHeader);
  }
  updateEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.baseURL}`+'/employee/update',employee,this.httpHeader);
  }
  getAllWithPagination(body: any): Observable<PaginationResponse>{
    return this. http.post(`${this.baseURL}`+'/employee/views',body,this.httpHeader);
  }
  
}
