import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  @Input() product!: IProduct;
  

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  addToCart(produyct: IProduct) {

  }

    getDiscountedClasses(product: IProduct): string[] {
    return product.discount ? ['strikethrough'] : [''];
  }
  
}
