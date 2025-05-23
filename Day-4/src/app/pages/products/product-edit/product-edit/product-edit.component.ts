import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../../../services/static-product.service';
import { IProduct } from '../../../../models/iproduct';

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
    private productService: StaticProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    const product = this.productService.getAllProducts().find(p => p.id === this.productId);

    this.editForm = this.fb.group({
      name: [product?.name, Validators.required],
      price: [product?.price, [Validators.required, Validators.min(0)]],
      quantity: [product?.quantity, [Validators.required, Validators.min(0)]],
      category: [product?.category, Validators.required],
      imgSrc: [product?.imgSrc]
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
    const updatedProduct: IProduct = {
      id: this.productId,
      ...this.editForm.value
    };
    this.productService.editProduct(updatedProduct);
    this.router.navigate(['/product', this.productId]);
  }
  }
}
