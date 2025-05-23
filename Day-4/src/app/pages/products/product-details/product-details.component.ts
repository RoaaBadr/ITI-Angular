import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticProductService } from '../../../services/static-product.service';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  productId!: number;
  
  constructor(
    private route: ActivatedRoute,
    private productService: StaticProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getAllProducts().find(p => p.id === this.productId);
    if (foundProduct) {
      this.product = foundProduct;
    }
  }
}
