import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-services/auth.service';
import { LoginDto } from '../../../models/user/loginDto';
import { Result } from '../../../models/result';
import { LocalStorage } from '../../../helpers/localStorage';
import { ListUserDto } from '../../../models/user/listUserDto';
import { NavUpdateService } from '../../../services/nav-update/nav-update.service';
import { InvoiceService } from '../../../services/invoice-service/invoice.service';
import { InvoiceResponse } from '../../../models/invoices/response/invoiceResponse';
import { CartCountService } from '../../../services/cartcount-service/cartcount-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  buttonMessage: string = 'Login';
  loginDto: LoginDto;
  title = "Login";
  isMsgVisible = false;
  errMsg: string;
  localStorage: LocalStorage;

  constructor(
    private router: Router, 
    private navUpdateService: NavUpdateService,
    private authService: AuthService, 
    private invoiceService: InvoiceService, 
    private cartCountService: CartCountService,
    private toastr: ToastrService){}

  ngOnInit(){
    this.loginDto = new LoginDto("","","");
    this.localStorage = new LocalStorage();
  }

  login(){
    this.buttonMessage = 'Please wait...';
    
    this.authService.login(this.loginDto).subscribe(data => {
      const result = data as Result;
      if(!result.isSuccess && result.value.toString() === '404'){
        this.changeStateIf404();    
        this.resetLoginState();
        return;
      }
      
      const user = result.value as ListUserDto;
      const token = result.token;
    
      this.localStorage.setLocalStorage(user.username, user.isAdmin, user.id, user.name, user.surname);
      this.localStorage.setToken(token);
      this.navUpdateService.changeMenu(user.isAdmin);
      this.navUpdateService.displayGreeting(user);
      this.getInvoiceCount();
      this.showSuccess();
      this.router.navigate(['home']);
    }, error => {
      this.showError(`${error.error} - Please contact the administrator for assistance`);
      this.buttonMessage = "Login";
      this.resetLoginState();
    });
  }

  getInvoiceCount(){
    const client = this.localStorage.getLocalStorage('cred_cache');
    this.invoiceService.getInvoicesByClientId(client.clientId).subscribe(data => {
      const itemCount = (data as InvoiceResponse[]).length;
      this.cartCountService.cartCount(itemCount);
    });
  }

  private changeStateIf404(){
    this.isMsgVisible = true;
    this.buttonMessage = 'Login';
    this.errMsg = 'User is NOT authenticated';
  }

  private resetLoginState(){
    setTimeout(() => {
      this.isMsgVisible = false;
      this.loginDto = new LoginDto('','','');
    }, 3000);
  }

  private showSuccess(){
    this.toastr.success("User logged in successfully");
  }

  private showError(msg: string){
    this.toastr.error(msg, 'Error');
  }

}
