import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export default class HeaderComponent {
  @Output() pageChange = new EventEmitter<string>()

  goTo(page: string){
    this.pageChange.emit(page)
  }
}
