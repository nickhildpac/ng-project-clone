import { type NewTask } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TasksService {

  private tasks = [
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
  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks)
      this.tasks = JSON.parse(tasks);
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);

  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
