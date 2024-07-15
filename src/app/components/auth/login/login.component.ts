import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-services/auth.service';
import { LoginDto } from '../../../models/user/loginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  buttonMessage: string = 'Login';
  loginDto: LoginDto;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(){
    this.loginDto = new LoginDto("","");
  }

  login(){
    this.buttonMessage = 'Please wait...';
    setTimeout(() => {
      this.buttonMessage = 'Login';

      this.authService.login(this.loginDto).subscribe(data => {
        console.log(data);
      });

      this.router.navigate(['home']);
    }, 3000);
  }

}
