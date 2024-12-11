import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name: string | undefined;
  // @Input() imgPath: string | undefined;
  newTaskClicked = false;

  constructor(private taskService: TasksService) {

  }

  onNewTask() {
    this.newTaskClicked = true;
  }

  onCancelNewTask() {
    this.newTaskClicked = false;
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onAddTask(newTask: NewTask) {
    this.taskService.addTask(newTask, this.userId);
    this.newTaskClicked = false;
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
}
