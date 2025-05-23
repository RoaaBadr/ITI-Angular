import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  productList: IProduct[] = []
  constructor() {
    // Initialize Array
    this.productList = [
      {
        id: 1,
        name: 'Smartphone',
        price: 8999,
        quantity: 20,
        category: 'Electronics',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0558/2752/9813/files/800-800_1.jpg?v=1736490618&width=1500'
      },
      {
        id: 2,
        name: 'Bluetooth Headphones',
        price: 1199,
        quantity: 19,
        category: 'Electronics',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0796/2030/9325/files/S79be6984cba64f4cb6cabf372743ae27D.webp?v=1708293439&width=800'
      },
      {
        id: 3,
        name: 'T-Shirt (Men)',
        price: 299,
        quantity: 13,
        category: 'Clothing',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0010/7538/0279/products/mens-premium-tee-talentless-pitch-black-s-155731.jpg?v=1709169208&width=800'
      },
      {
        id: 4,
        name: 'Lipstick Set',
        price: 149,
        quantity: 25,
        category: 'Beauty',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0583/3480/6174/files/IMG_3938.png?v=1682488302&format=webp&width=800'
      },
      {
        id: 5,
        name: 'Organic Honey',
        price: 99,
        quantity: 34,
        category: 'Groceries',
        imgSrc: 'https://cdn.shopify.com/s/files/1/1361/4111/files/NEUTRAL_PRODUCT_IMAGES_-_2025-01-15T082819.915.png?v=1736890183&format=webp&width=800'
      },
      {
        id: 6,
        name: 'Leather Jacket',
        price: 999,
        quantity: 37,
        category: 'Clothing',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0279/2649/5337/files/oiwjetoentonq_cca6fb70-bf09-4c28-9abb-ee7e1add2c53.jpg?v=1697570026&width=800'
      },
      {
        id: 7,
        name: 'Power Bank 10000mAh',
        price: 499,
        quantity: 16,
        category: 'Electronics',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0169/1506/files/1414379_POWERPOD-10.BLK__powerpod10blk_550_T8M339USHCP3.jpg?v=1712924936&width=800'
      },
      {
        id: 8,
        name: 'Facial Cleanser',
        price: 120,
        quantity: 43,
        category: 'Beauty',
        imgSrc: 'https://cdn.shopify.com/s/files/1/0568/4484/5206/products/skinmedica_facial_cleanser.jpg?v=1658341736&width=800'
      },
      {
        id: 9,
        name: 'Olive Oil 1L',
        price: 89,
        quantity: 52,
        category: 'Groceries',
        imgSrc: 'https://cdn.shopify.com/s/files/1/3004/8752/files/Atlas-Olive-Oils-Alas-1000ml.jpg?v=1732535169&width=800'
      }
    ]
  }
  getAllProducts(): IProduct[] {
    return this.productList;
  }
  getProductById(productId: number): IProduct | undefined {
    return this.productList.find(p => p.id == productId);
  }
  addNewProduct(product: IProduct) {
    // return this.productList.push(product);
    const newId = Math.max(...this.productList.map(p => p.id)) + 1;
    this.productList.push({ ...product, id: newId });
  }
  editProduct(product: IProduct) {
    const index = this.productList.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.productList[index] = product;
    }
  }
  deleteProduct(id: number): void {
    this.productList = this.productList.filter(product => product.id !== id);
  }
}
