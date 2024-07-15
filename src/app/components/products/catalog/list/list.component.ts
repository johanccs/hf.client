import { Component } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { ProductService } from '../../../../services/product-service/product-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: ListProductType[] = [];
  title: string = 'Catalog';

  constructor(private prodService: ProductService){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.prodService.getProducts().subscribe(data => {
      this.products = data as ListProductType[];
    });
  }

}
