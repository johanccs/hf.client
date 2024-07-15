import { Component } from '@angular/core';
import { ListInvoiceType } from '../../models/invoices/listInvoiceType';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  title: string = 'Shopping Cart';
  invoices: ListInvoiceType[] = [];
  vatPercentage = 15;

  ngOnInit(){
    this.getInvoices();
  }

  getInvoices(){
    this.invoices.push(new ListInvoiceType(1,1, 'Johan Potgieter', 'Laptop', 'Asus Tuff A15',1, 13900, 'assets/images/products/tmp/laptop.jpg'));
    this.invoices.push(new ListInvoiceType(2,2, 'Nikki Heck', 'Mouse', 'Logitec mouse',3, 200, 'assets/images/products/tmp/mouse.jpg'));
    this.invoices.push(new ListInvoiceType(3,1, 'John Doe', 'Keyboard', 'Mecer keyboard',1, 345, 'assets/images/products/tmp/keyboard.jpg'));
  }

  getTotal(){
    let total = 0;
    this.invoices.forEach(x=> {
      total += x.price;
    });

    return total;
  }

  getVat(){
    let total = this.getTotal();
    let subTotal = total / (this.vatPercentage + 1);

    return subTotal;
  }
}
