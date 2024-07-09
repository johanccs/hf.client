import { Component } from '@angular/core';
import { Product } from '../../../../models/products/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];
  
  ngOnInit(){

    this.products.push(new Product("Laptop"));
    this.products.push(new Product("Mouse"));
    this.products.push(new Product("Keyboard"));
    this.products.push(new Product("Monitor"));
    this.products.push(new Product("Chair"));
    this.products.push(new Product("SSD"));
  }

}
