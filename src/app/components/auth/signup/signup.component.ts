import { Component } from '@angular/core';
import { NewUserDto } from '../../../models/user/newUserDto';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth-services/auth.service';
import { Result } from '../../../models/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: NewUserDto;
  title: string = 'Sign up new user';
  result: Result;

  ngOnInit(){
    this.user = new NewUserDto('','','', "", "",false, this.getCurrentDate());
  }

  constructor(private authService: AuthService, private router:Router){ }

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
        this.result = data as Result;
        this.title = `User id - ${this.result.value} saved!`;
        if(this.result.isSuccess){
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000);
        }
      });

  }
}
