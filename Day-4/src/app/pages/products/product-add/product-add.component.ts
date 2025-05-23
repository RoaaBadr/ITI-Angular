import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../../services/static-product.service';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-add',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: StaticProductService
  ) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: [[Validators.required, Validators.min(0)]],
      quantity: [[Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      imgSrc: ['']
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      const newProduct: IProduct = {
        id: 0,
        ...this.addForm.value
      };
      this.productService.addNewProduct(newProduct);
      this.router.navigate(['/product']);
    }
  }
}
