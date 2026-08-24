import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancelTaskFormEvent = new EventEmitter();
  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancelTaskFormEvent.emit();
  }
  onSubmit() {

    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }, this.userId);
    this.cancelTaskFormEvent.emit();
  }
}
