import { Component } from '@angular/core';
import { Product } from '../../../../models/products/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: Product[] = [];
  title: string = 'Catalog';

  ngOnInit(){

    this.products.push(new Product("Laptop"));
    this.products.push(new Product("Mouse"));
    this.products.push(new Product("Keyboard"));
    this.products.push(new Product("Monitor"));
    this.products.push(new Product("Chair"));
    this.products.push(new Product("SSD"));
  }

}
