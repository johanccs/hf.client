import { Component } from '@angular/core';
import { ListInvoiceType } from '../../../models/invoices/listInvoiceType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  invoices: ListInvoiceType[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.getInvoices();


  }

  getInvoices(){
    this.invoices.push(new ListInvoiceType(1, 1, 'Johan Potgieter', 1, 'Laptop', 'Asus Tuff A15'));
    this.invoices.push(new ListInvoiceType(2, 2, 'Nikki Heck', 2, 'Mouse', 'Logitec mouse'));
    this.invoices.push(new ListInvoiceType(3, 3, 'John Doe', 3, 'Keyboard', 'Mecer keyboard'));
  }

  modifyInvoice(invoice: ListInvoiceType){
    this.router.navigate(['user-invoice'])
  }
}
