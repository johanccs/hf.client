import { Component, Input } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { NgForm } from '@angular/forms';
import { NewInvoiceType } from '../../../../models/invoices/newInvoiceType';

@Component({
  selector: 'app-prod-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() cartItem: ListProductType;

  newInvoice: NewInvoiceType;
  
  ngOnInit(){
    console.log('CartItem' ,this.cartItem);
    this.newInvoice = new NewInvoiceType(0,0,1);
  }

  onSubmit(form: NgForm){
    //Get clientId from localStorage
    const clientId = 1;
    this.newInvoice = new NewInvoiceType(this.cartItem.id, clientId, form.value.quantity);
  }

}
