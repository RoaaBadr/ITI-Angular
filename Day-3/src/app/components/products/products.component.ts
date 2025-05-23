import { Component } from '@angular/core';
import {CategoryFilterComponent } from './category-filter/category-filter.component'
import {ProductCardComponent } from './product-card/product-card.component'
import {ProductListComponent } from './product-list/product-list.component'
import {SearchInputComponent } from './search-input/search-input.component'

@Component({
  selector: 'app-products',
  imports: [CategoryFilterComponent, ProductCardComponent, ProductListComponent, SearchInputComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {
  allProducts = [
  {
    id: 1,
    name: 'Smartphone',
    price: 8999,
    category: 'Electronics',
    image: 'https://cdn.shopify.com/s/files/1/0558/2752/9813/files/800-800_1.jpg?v=1736490618&width=1500'
  },
  {
    id: 2,
    name: 'Bluetooth Headphones',
    price: 1199,
    category: 'Electronics',
    image: 'https://cdn.shopify.com/s/files/1/0796/2030/9325/files/S79be6984cba64f4cb6cabf372743ae27D.webp?v=1708293439&width=800'
  },
  {
    id: 3,
    name: 'T-Shirt (Men)',
    price: 299,
    category: 'Clothing',
    image: 'https://cdn.shopify.com/s/files/1/0010/7538/0279/products/mens-premium-tee-talentless-pitch-black-s-155731.jpg?v=1709169208&width=800'
  },
  {
    id: 4,
    name: 'Lipstick Set',
    price: 149,
    category: 'Beauty',
    image: 'https://cdn.shopify.com/s/files/1/0583/3480/6174/files/IMG_3938.png?v=1682488302&format=webp&width=800'
  },
  {
    id: 5,
    name: 'Organic Honey',
    price: 99,
    category: 'Groceries',
    image: 'https://cdn.shopify.com/s/files/1/1361/4111/files/NEUTRAL_PRODUCT_IMAGES_-_2025-01-15T082819.915.png?v=1736890183&format=webp&width=800'
  },
  {
    id: 6,
    name: 'Leather Jacket',
    price: 999,
    category: 'Clothing',
    image: 'https://cdn.shopify.com/s/files/1/0279/2649/5337/files/oiwjetoentonq_cca6fb70-bf09-4c28-9abb-ee7e1add2c53.jpg?v=1697570026&width=800'
  },
  {
    id: 7,
    name: 'Power Bank 10000mAh',
    price: 499,
    category: 'Electronics',
    image: 'https://cdn.shopify.com/s/files/1/0169/1506/files/1414379_POWERPOD-10.BLK__powerpod10blk_550_T8M339USHCP3.jpg?v=1712924936&width=800'
  },
  {
    id: 8,
    name: 'Facial Cleanser',
    price: 120,
    category: 'Beauty',
    image: 'https://cdn.shopify.com/s/files/1/0568/4484/5206/products/skinmedica_facial_cleanser.jpg?v=1658341736&width=800'
  },
  {
    id: 9,
    name: 'Olive Oil 1L',
    price: 89,
    category: 'Groceries',
    image: 'https://cdn.shopify.com/s/files/1/3004/8752/files/Atlas-Olive-Oils-Alas-1000ml.jpg?v=1732535169&width=800'
  }
];
  filteredProducts = [...this.allProducts];
  searchTerm = '';
  selectedCategory = '';

  onSearch(term: string){
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }
  onCategoryChange(term: string){
    this.selectedCategory = term.toLowerCase();
    this.applyFilters();
  }
  applyFilters(){
    this.filteredProducts = this.allProducts.filter(p => {
      const matchesCategory = this.selectedCategory ? (p.category.toLowerCase()) === this.selectedCategory : true;
      const matchesSearch = p.name.toLowerCase().includes(this.searchTerm);
      return matchesCategory && matchesSearch;
    });
  }
}
