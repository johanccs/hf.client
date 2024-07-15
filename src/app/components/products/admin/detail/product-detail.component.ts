import { Component } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: ListProductType;
  title: string = 'Change Product detail';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.product = params as ListProductType;
    })
  }

}
