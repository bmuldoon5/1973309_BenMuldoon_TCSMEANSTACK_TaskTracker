import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable, observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

  /*
  loadEmployee(emp:any): Array<Task[]> {
    return this.http.get("http://localhost:3000/tasks",emp).subscribe(result=>console.log(result),error=>console.log(error));
  }
  */

  loadEmployeeDetails():Observable<Task[]>{
  return this.http.get<Task[]>("http://localhost:3000/tasks");

  }

storeEmployee(emp:any){
  //first url second json data (entered into parameter and then put into html i guess is from the parameter above )
  this.http.post("http://localhost:3000/tasks",emp).
  subscribe(result=>console.log(result),error=>console.log(error));
}

}
