import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceDetailComponent } from './components/invoices/detail/invoice-detail.component';
import { InvoiceListComponent } from './components/invoices/list/invoice-list.component';
import { ProductDetailComponent } from './components/products/admin/detail/product-detail.component';
import { ProductListComponent } from './components/products/admin/list/product-list.component';
import { AdminComponent } from './components/navs/admin/admin.component';
import { UserComponent } from './components/navs/user/user.component';
import { ListComponent } from './components/products/catalog/list/list.component';
import { ItemComponent } from './components/products/catalog/item/item.component';
import { TileComponent } from './components/home/tile/tile.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InvoiceDetailComponent,
    InvoiceListComponent,
    ProductDetailComponent,
    ProductListComponent,
    AdminComponent,
    UserComponent,
    ListComponent,
    ItemComponent,
    TileComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
