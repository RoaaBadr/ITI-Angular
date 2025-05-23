import { CommonModule } from '@angular/common';
import  Header  from './components/header/header.component';
import  Home  from './components/home/home.component';
import  Products  from './components/products/products.component';
import  ITItracks  from './components/iti-tracks/iti-tracks.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Home , Header, Products, ITItracks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day-3';
  currentPage = 'home'

  navTo(page: string){
    this.currentPage = page
  }
}
