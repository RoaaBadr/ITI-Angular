import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { StaticProductService } from '../../services/static-product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts: IProduct[] = [];

  constructor(private productService: StaticProductService) {}

  ngOnInit(): void {
    this.featuredProducts = this.productService.getAllProducts().slice(0, 3);
  }
}
