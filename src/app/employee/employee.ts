import { Department } from "../models/department";

export class Employee {
    id?:any;
    name?:string;
    email?:string;
    designation?:string;
    salary?:number;
    department?:Department;
}
