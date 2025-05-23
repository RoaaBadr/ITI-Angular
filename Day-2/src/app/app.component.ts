import { Component } from '@angular/core';
import  Filteration  from './components/Task1/home/home.component';
import ProductCards from './components/Task2/home/products.component';
import TodoList from './components/Task3/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [Filteration, ProductCards, TodoList ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day-2';
}
