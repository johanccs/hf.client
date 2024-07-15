import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListComponent } from './components/products/catalog/list/list.component';
import { ProductListComponent } from './components/products/admin/list/product-list.component';
import { ProductDetailComponent } from './components/products/admin/detail/product-detail.component';
import { InvoiceListComponent } from './components/invoices/list/invoice-list.component';
import { InvoiceDetailComponent } from './components/invoices/detail/invoice-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: ListComponent },
  { path: 'admin-product-list', component: ProductListComponent },
  { path: 'admin-product-edit', component: ProductDetailComponent },
  { path: 'user-invoices', component: InvoiceListComponent },
  { path: 'user-invoice', component: InvoiceDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
