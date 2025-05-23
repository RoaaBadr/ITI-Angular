import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports:[CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export default class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Headphone',
      price: 200,
      quantity: 0,
      image: 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Sunglass',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Digital Watch',
      price: 360,
      quantity: 30,
      image: 'https://images.unsplash.com/photo-1555487505-8603a1a69755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
    }
  ];

  getQuantityMessage(quantity: number): string {
    switch(quantity) {
      case 0: return 'This product not available now';
      case 1: return 'Only one Product Available';
      default: return `Quantity: ${quantity}`;
    }
  }
}