import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>()

  onInput(e: Event){
    console.log((e.target as HTMLInputElement).value)
    this.search.emit((e.target as HTMLInputElement).value)
  }
}
