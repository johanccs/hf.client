import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListInvoiceType } from '../../../models/invoices/listInvoiceType';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent {

title: string = 'Invoice Detail';
invoice: ListInvoiceType;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.invoice = params as ListInvoiceType;
    })
  }

  

}
