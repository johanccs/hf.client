import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { NgForm } from '@angular/forms';
import { LocalStorage } from '../../../../helpers/localStorage';
import { Router } from '@angular/router';
import { NewInvoiceLine } from '../../../../models/invoices/newInvoiceLine';

@Component({
  selector: 'app-prod-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() cartItem: ListProductType;
  @Output() onInvoiceCreated = new EventEmitter();

  localStorage: LocalStorage;

  newInvoice: NewInvoiceLine;
  
  constructor(private router: Router){}

  ngOnInit(){
    this.localStorage = new LocalStorage();
  }

  onSubmit(form: NgForm){
    const client = this.localStorage.getLocalStorage('cred_cache');

    if(!client){
      alert('Please login before selecting products');
      this.router.navigate(['login']);
    }

    this.newInvoice = new NewInvoiceLine(this.cartItem.id, this.cartItem.price, form.value.quantity);
    this.onInvoiceCreated.emit(this.newInvoice);
  }
}
