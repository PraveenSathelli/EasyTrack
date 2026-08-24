import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Lear all the basic and advanced features',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master 2 Angular',
      summary: 'Lear features',
      dueDate: '2024-05-31'
    }
    ,
    {
      id: 't3',
      userId: 'u1',
      title: 'Master 3 Angular',
      summary: 'Lear all advanced features',
      dueDate: '2024-03-31'
    }
    ,
    {
      id: 't4',
      userId: 'u3',
      title: 'Master 4 Angular',
      summary: 'Lear 4 the basic and advanced features',
      dueDate: '2025-04-20'
    }
    ,
    {
      id: 't5',
      userId: 'u3',
      title: 'Master 5 Angular',
      summary: 'Lear 5 all basic and advanced features',
      dueDate: '2024-02-11'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter(x => x.userId === this.id);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(x => x.id != id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask =false;
  }

}
