import { Component } from '@angular/core';
import { ListProductType } from '../../../../models/products/listProductType';
import { ProductService } from '../../../../services/product-service/product-service';
import { NewInvoiceHeader } from '../../../../models/invoices/newInvoiceHeader';
import { NewInvoiceLine } from '../../../../models/invoices/newInvoiceLine';
import { LocalStorage } from '../../../../helpers/localStorage';
import { InvoiceService } from '../../../../services/invoice-service/invoice.service';
import { ToastrService } from 'ngx-toastr';
import { Result } from '../../../../models/result';

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

  constructor(
    private prodService: ProductService, 
    private invoiceService: InvoiceService, 
    private toastr: ToastrService){}

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
    this.showSuccess(`Item added to cart`, 'Cart');

  }

  gotoCart(){
    this.invoiceService.createInvoice(this.invoice).subscribe(data=> {
      const results = data as Result;
      if(results.isSuccess){
        this.showSuccess(`Invoice ${results.value.slice(0,5)} was created`, 'Invoice');

      }else{
        this.showError(`${results.error.code} ${results.error.name}`);
      }
    });
  }

  private getCurrentDate(){
    const today = new Date();
    return today.toLocaleDateString();
  }

  private showSuccess(msg: string, title: string){
    this.toastr.success(msg, title)
  }

  private showError(msg: string){
    this.toastr.error(msg, 'Error');
  }

}
