import { Component } from '@angular/core';
import { ListInvoiceType } from '../../../models/invoices/listInvoiceType';
import { Router } from '@angular/router';
import { InvoiceService } from '../../../services/invoice-service/invoice.service';
import { LocalStorage } from '../../../helpers/localStorage';
import { NewInvoiceHeader } from '../../../models/invoices/newInvoiceHeader';
import { ListInvoiceHeader } from '../../../models/invoices/listInvoiceHeader';
import { InvoiceResponse } from '../../../models/invoices/response/invoiceResponse';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  invoices: InvoiceResponse[] = [];
  localStorage: LocalStorage;

  constructor(private router: Router, private invoiceService: InvoiceService){}

  ngOnInit(){
    this.getInvoices();
    this.localStorage = new LocalStorage();
  }

  getInvoices(){

    const client = this.getLocalStorage('cred_cache');
  
    this.invoiceService.getInvoicesByClientId(client.clientId).subscribe(data => {
     console.log(data);
     const internal_invoices = data as InvoiceResponse[];
     this.invoices = internal_invoices.map(x=> {
      return new InvoiceResponse(x.id, x.id.slice(0,5), x.clientId, x.friendlyName, x.date,x.subtotal);
     });
   })
  }

  modifyInvoice(invoice: ListInvoiceHeader){
    this.router.navigate(['user-invoice'], {queryParams: invoice});
  }

  private getLocalStorage(key: string){
    const val = localStorage.getItem(key);
    const strVal= JSON.parse(val);

    return strVal;
}

}
