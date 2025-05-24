import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../models/iproduct';
import { DynamicProductService } from '../../../services/dynamic-product.service';

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
    private router: Router,
    private productService: DynamicProductService
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.productService.getProductById(id).subscribe({
    next: (product) => this.product = product,
    error: (err) => {
      console.error('Error loading product:', err);
      this.router.navigate(['/product']);
    }
  });
  }
}
