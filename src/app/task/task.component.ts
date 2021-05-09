import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Array<Task> = [];
  display:boolean = false;
  constructor(public tskSer:TaskService) { }

  ngOnInit(): void {


    this.tskSer.loadEmployeeDetails().subscribe(result=>this.tasks=result);
   
  }
  storeUser(taskRef:any){
    console.log(taskRef);
    this.tskSer.storeEmployee(taskRef);
    this.tskSer.loadEmployeeDetails().subscribe(result=>this.tasks=result);
  }

}