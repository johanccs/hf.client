import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth-services/auth.service';
import { ResetPassword } from '../../../models/user/reset-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  title: string = 'Forgot password';

  constructor(private authService: AuthService){}

  onSubmit(form: NgForm){

    const password = new ResetPassword(form.value.email);
    this.authService.resetPassword(password).subscribe(data => {
      console.log(data);
      alert('Sending instructions through email');
    })
  }
}
