import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProduct } from '../../../../models/iproduct';
import { DynamicProductService } from '../../../../services/dynamic-product.service';

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  editForm!: FormGroup;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: DynamicProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => this.editForm.patchValue(product),
      error: (err) => console.error('Error loading product:', err)
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.productService.editProduct({
        id: this.productId,
        ...this.editForm.value
      }).subscribe({
        next: () => this.router.navigate(['/product', this.productId]),
        error: (err) => console.error('Error updating product:', err)
      });
    }
  }
}