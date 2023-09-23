import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []
  showAddForm: boolean = false;
  subscription: Subscription;

  // for using service we have to add it as a provider in the constructor
  constructor(private taskService: TaskService, private uiService: UiService){
    this.uiService.onToggle().subscribe(value => (this.showAddForm = value));
  }

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }

  deleteTask(task: Task){
    console.log(task);
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(item => item.id !== task.id)));
  }

  onDoubleClick(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminer(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addNewTask(task).subscribe(task => (this.tasks.push(task)));
  }
}
