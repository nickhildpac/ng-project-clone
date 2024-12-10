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
  @Input({ required: true }) userId!: string;
  @Input() name: string | undefined;
  // @Input() imgPath: string | undefined;
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

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
