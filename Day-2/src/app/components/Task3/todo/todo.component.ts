import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export default class TodoComponent {
  newTask: string = ''
  tasks: { name: string; completed: boolean }[] = [];

  constructor() {
    this.tasks = [
  { name: 'Finish Angular todo list project', completed: false },
  { name: 'Review Bootstrap design basics', completed: true },
  { name: 'Watch a 10-min Figma UI video', completed: false },
    ];
  }
  addTask() {
    this.tasks.push({ name: this.newTask.trim(), completed: false });
    this.newTask = '';
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
