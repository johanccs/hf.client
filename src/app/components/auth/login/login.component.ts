import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  buttonMessage: string = 'Login';

  constructor(private router: Router){}

  login(){
    this.buttonMessage = 'Please wait...';
    setTimeout(() => {
      this.buttonMessage = 'Login';
      this.router.navigate(['home']);
    }, 3000);
  }

}
