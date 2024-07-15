import { Component, Input } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';

@Component({
  selector: 'app-prod-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() cartItem: ListProductType;

  ngOnInit(){
    console.log('CartItem' ,this.cartItem);
  }

}
