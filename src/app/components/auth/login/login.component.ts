import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-services/auth.service';
import { LoginDto } from '../../../models/user/loginDto';
import { Result } from '../../../models/result';
import { LocalStorage } from '../../../helpers/localStorage';
import { ListUserDto } from '../../../models/user/listUserDto';

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
    private authService: AuthService){}

  ngOnInit(){
    this.loginDto = new LoginDto("","");
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
  
      this.localStorage.setLocalStorage(user.username, user.isAdmin);
      this.router.navigate(['home']);
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
      this.loginDto = new LoginDto('','');
    }, 3000);
  }
}
