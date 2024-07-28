import { Component } from '@angular/core';
import { NewUserDto } from '../../../models/user/newUserDto';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth-services/auth.service';
import { Result } from '../../../models/result';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: NewUserDto;
  title: string = 'Sign up new user';

  ngOnInit(){
    this.user = new NewUserDto('','','', "", "",false, this.getCurrentDate());
  }

  constructor(
    private authService: AuthService, 
    private router:Router, 
    private toastr: ToastrService){ }

  getCurrentDate(){
    const today = new Date();
    return today.toLocaleDateString();
  }

  onSubmit(form: NgForm){
    const newUser = new NewUserDto(
      form.value.name, 
      form.value.surname, 
      form.value.email, 
      form.value.username,
      form.value.password,
      form.value.isAdmin = false, 
      form.value.dateRegistered);

      this.authService.registerUser(newUser).subscribe(data => {
        const results = data as Result;
        if(results.isSuccess){
          this.showSuccess(`User id - ${results.value} saved!`, 'Signup');
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000);
        }else{
          this.showError(`${results.error.code} ${results.error.name}`);
        }
      });
  }

  private showSuccess(msg: string, title: string){
    this.toastr.success(msg, title);
  }

  private showError(msg: string){
    this.toastr.success(msg, 'Error');
  }
}
