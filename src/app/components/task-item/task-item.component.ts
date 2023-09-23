import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task;
  faTimes = faTimes;
  @Output() onTaskDelete = new EventEmitter();
  @Output() onToggle = new EventEmitter();

  onCrossClick(){
    console.log('clicked');
    this.onTaskDelete.emit();
  }

  onDoubleClick(){
    this.onToggle.emit();
  }
}
