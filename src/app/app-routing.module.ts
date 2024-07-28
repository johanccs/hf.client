import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListComponent } from './components/products/catalog/list/list.component';
import { ProductListComponent } from './components/products/admin/list/product-list.component';
import { ProductDetailComponent } from './components/products/admin/detail/product-detail.component';
import { InvoiceListComponent } from './components/invoices/list/invoice-list.component';
import { InvoiceDetailComponent } from './components/invoices/detail/invoice-detail.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { UsersComponent } from './components/auth/users/list/users.component';
import { UserDetailComponent } from './components/auth/users/user-detail/user-detail.component';
import { CreateProductComponent } from './components/products/admin/create-product/create-product.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: ListComponent },
  { path: 'admin-product-list', component: ProductListComponent,canActivate: [AuthGuard] },
  { path: 'admin-product-edit', component: ProductDetailComponent,canActivate: [AuthGuard] },
  { path: 'admin-product-create', component: CreateProductComponent,canActivate: [AuthGuard] },
  { path: 'user-invoices', component: InvoiceListComponent, canActivate: [AuthGuard] },
  { path: 'user-invoice', component: InvoiceDetailComponent,canActivate: [AuthGuard] },
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'users', component: UsersComponent,canActivate: [AuthGuard] },
  { path: 'user', component: UserDetailComponent,canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
