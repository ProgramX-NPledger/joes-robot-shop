import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor(private http: HttpClient) { }

  add(product: IProduct) {
    this.http.post('/api/cart', this.cart).subscribe({
      next: () => console.log(`Added ${product.name} to cart.`),
      error: (err) => console.error(`Error adding ${product.name} to cart:`, err)
    });
    this.cart.push(product);
    //console.log(`Added ${product.name} to cart.`);
  }
}
