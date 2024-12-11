import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';

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
  tasks = [
    {
      id: 't1',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'learn basics and advanced topics of angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'learn basics and advanced topics of angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'learn basics and advanced topics of angular',
      dueDate: '2025-12-31',
    },
  ];

  onNewTask() {
    this.newTaskClicked = true;
  }

  onCancelNewTask() {
    this.newTaskClicked = false;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask(newTask: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
      userId: this.userId
    });
    this.newTaskClicked = false;
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
