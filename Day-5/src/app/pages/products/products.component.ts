import { Component, OnInit } from '@angular/core';
import { CategoryFilterComponent } from './category-filter/category-filter.component'
import { ProductListComponent } from './product-list/product-list.component'
import { SearchInputComponent } from './search-input/search-input.component'
import { IProduct } from '../../models/iproduct';
import { ProductHeaderComponent } from "./product-header/product-header.component";
import { DynamicProductService } from '../../services/dynamic-product.service';

@Component({
  selector: 'app-products',
  imports: [CategoryFilterComponent, ProductListComponent, SearchInputComponent, ProductHeaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {
  constructor(private productService: DynamicProductService) { }
  allProducts!: IProduct[]
  filteredProducts: any[] = []

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts = products;
        this.filteredProducts = [...products];
      },
      error: (err) => console.error('Error loading products:', err)
    });
  }

  searchTerm = '';
  selectedCategory = '';

  onSearch(term: string) {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }
  onCategoryChange(term: string) {
    this.selectedCategory = term.toLowerCase();
    this.applyFilters();
  }
  applyFilters() {
    this.filteredProducts = this.allProducts.filter(p => {
      const matchesCategory = this.selectedCategory ? (p.category.toLowerCase()) === this.selectedCategory : true;
      const matchesSearch = p.name.toLowerCase().includes(this.searchTerm);
      return matchesCategory && matchesSearch;
    });
  }
  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.allProducts = this.allProducts.filter(p => p.id !== id);
        this.applyFilters();
      },
      error: (err) => console.error('Error deleting product:', err)
    });
  }
}
