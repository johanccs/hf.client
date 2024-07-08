import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';

import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceDetailComponent } from './components/invoices/detail/invoice-detail.component';
import { InvoiceListComponent } from './components/invoices/list/invoice-list.component';
import { ProductListComponent } from './components/products/list/product-list.component';
import { ProductDetailComponent } from './components/products/detail/product-detail.component';
import { AdminComponent } from './components/navs/admin/admin.component';
import { UserComponent } from './components/navs/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InvoiceDetailComponent,
    InvoiceListComponent,
    ProductListComponent,
    ProductDetailComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule, CardModule, InputTextModule, FloatLabelModule, PasswordModule, MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
