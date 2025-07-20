import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  filter: string = '';

  // private cartSvc: CartService = inject(CartService); // can also be in the ctor

  ngOnInit(): void {
  
    this.productService.getProducts().subscribe({
      next: (products) => this.products = products,
      error: (err) => console.error(err)
    });
    // use a snapshot if the component itself isn't going to change the route
    //this.filter = this.route.snapshot.params['filter'];

    // subscribe if the component might change the route
    // e.g., if the component has a filter that can change dynamically
    this.route.params.subscribe(params => {
      this.filter = params['filter'] ?? '';
    });

  }

  constructor(private cartSvc: CartService, 
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) {
   
  }



getFilteredProducts(filter: string): IProduct[] {

  console.log('in',filter)
  this.filter = filter;
  if (this.filter === 'All') {
    console.log('No filter applied, returning all products');
    return this.products;
  }
  console.log(`Filtering products by category: ${this.filter}`);
  return this.products.filter(product => product.category === this.filter);
  }



  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }
}


