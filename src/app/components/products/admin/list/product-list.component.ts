import { Component } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product-service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: ListProductType[] = [];
  
  constructor(private router: Router, private productService: ProductService){}

  ngOnInit(){
    this.getProducts();
  }

  modifyProduct(product: ListProductType){
    this.router.navigate(['admin-product-edit', product]);
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data as ListProductType[];
    });
  }

}
