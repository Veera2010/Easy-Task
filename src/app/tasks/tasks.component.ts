import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) userId !:string;
  @Input({required:true}) name !:string;

  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId);
  }

  tasks = [
    {id: '1', userId:"u1" , title: 'Task 1', summary: 'This is the summary of Task 1', dueDate: '2024-06-30'},
    {id: '2', userId:"u2" , title: 'Task 2', summary: 'This is the summary of Task 2', dueDate: '2024-06-30'},
    {id: '3', userId:"u3" , title: 'Task 3', summary: 'This is the summary of Task 3', dueDate: '2024-06-30'},
    {id: '4', userId:"u4" , title: 'Task 4', summary: 'This is the summary of Task 4', dueDate: '2024-06-30'},
    {id: '5', userId:"u5" , title: 'Task 5', summary: 'This is the summary of Task 5', dueDate: '2024-06-30'},
  ]

}
