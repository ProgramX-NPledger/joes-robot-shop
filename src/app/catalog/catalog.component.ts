import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 1,
      description: 'A high-quality robot vacuum cleaner',
      name: 'Robot Vacuum',
      category: 'Home Appliances',
      price: 299.99,
      imageName: 'robot.png',
      discount: 10
    };
  }
}
