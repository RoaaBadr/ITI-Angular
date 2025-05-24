import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DynamicProductService {
  baseUrl: string = 'http://localhost:3005/product'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl)
  }
  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${productId}`)
  }
  addNewProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product)
  }
  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseUrl}/${product.id}`, product)
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.baseUrl}/${id}`)
  }
}
