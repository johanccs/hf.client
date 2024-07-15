import { Component } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: ListProductType[] = [];
  
  constructor(private router: Router){}

  ngOnInit(){
    
  }

  modifyProduct(product: ListProductType){
    this.router.navigate(['admin-product-edit', product]);
  }

}
