import { Component } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { ProductService } from '../../../../services/product-service/product-service';
import { NewInvoiceHeader } from '../../../../models/invoices/newInvoiceHeader';
import { NewInvoiceLine } from '../../../../models/invoices/newInvoiceLine';
import { LocalStorage } from '../../../../helpers/localStorage';
import { InvoiceService } from '../../../../services/invoice-service/invoice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: ListProductType[] = [];
  invoice: NewInvoiceHeader;
  invoiceLines: NewInvoiceLine[] = [];
  localStorage: LocalStorage;

  title: string = 'Catalog';
  buttonTitle = 'Go to cart';

  constructor(private prodService: ProductService, private invoiceService: InvoiceService){}

  ngOnInit(){
    this.localStorage = new LocalStorage();

    const client = this.localStorage.getLocalStorage('cred_cache');
    this.getProducts();
    this.initializeInvoice(client.clientId);
  }

  initializeInvoice(clientId: string){
    this.invoice = new NewInvoiceHeader(this.getCurrentDate(), clientId, this.invoiceLines)
  }

  getProducts(){
    this.prodService.getProducts().subscribe(data => {
      let internal_products = data as ListProductType[];
      this.products = internal_products.map(x=> {
        return new ListProductType(
          x.id, 
          x.productName, 
          x.productDescription,
          x.price,
          x.quantity,
          `assets/images/products/tmp/${x.imageUrl}`);
      });
    });
  }

  addToInvoiceCollection(invoice: NewInvoiceLine){
    this.invoice.invoiceLines.push(invoice);
    this.buttonTitle = ' ' + this.invoice.invoiceLines.length + ' items going to cart'; 
  }

  gotoCart(){
    this.invoiceService.createInvoice(this.invoice).subscribe(data=> {
      console.log(data);
    });
  }

  private getCurrentDate(){
    const today = new Date();
    return today.toLocaleDateString();
  }

}
