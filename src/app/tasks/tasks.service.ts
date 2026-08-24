import { Injectable } from "@angular/core";
import { NewTask } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = [
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

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(x => x.userId === userId);
    }

    addTask(task: NewTask, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate,
            userId: userId
        }); this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(x => x.id != id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}