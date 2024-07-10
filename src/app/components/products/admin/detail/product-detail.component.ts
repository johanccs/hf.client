import { Component } from '@angular/core';
import { Product } from '../../../../models/products/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Product;
  title: string = 'Change Product detail';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.product = params as Product;
      console.log("Params", this.product);
    })
  }

}
