import { Component } from '@angular/core';
import { ListInvoiceType } from '../../../models/invoices/listInvoiceType';
import { Router } from '@angular/router';
import { InvoiceService } from '../../../services/invoice-service/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  invoices: ListInvoiceType[] = [];

  constructor(private router: Router, private invoiceService: InvoiceService){}

  ngOnInit(){
    this.getInvoices();
  }

  getInvoices(){
   this.invoiceService.getInvoicesByClientId(1).subscribe(data => {
    this.invoices = data as ListInvoiceType[];
   })
  }

  modifyInvoice(invoice: ListInvoiceType){
    this.router.navigate(['user-invoice'], {queryParams: invoice});
  }
}
