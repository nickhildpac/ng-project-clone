import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-newtask',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() taskAdded!: boolean;
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  private tasksService = inject(TasksService);
  onSubmit() {

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }

  onCancelTask() {
    this.close.emit();
  }
}
