import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
  @Output() categoryChange = new EventEmitter<string>();
  categories = ['Electronics', 'Clothing', 'Beauty', 'Groceries'];

  onChange(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.categoryChange.emit(category);
  }
}
