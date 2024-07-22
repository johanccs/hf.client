import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../models/user/loginDto';
import { NewUserDto } from '../../models/user/newUserDto';
import { ResetPassword } from '../../models/user/reset-password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://localhost:5001/api/v1";

  constructor(private httpClient: HttpClient) { }

  login(login: LoginDto){
    const url = `${this.apiUrl}/auth/login`;
    
    return this.httpClient.post(url,login);
  }

  registerUser(user: NewUserDto){
    const url = `${this.apiUrl}/auth/register`;
    
    console.log('authservice', JSON.stringify(user));

    return this.httpClient.post(url,user);
  }

  resetPassword(password: ResetPassword){
    const url = `${this.apiUrl}/auth/reset-password`;

    return this.httpClient.post(url, password);
  }

  getUsers(){
    const url = `${this.apiUrl}/auth/get-users`;

    return this.httpClient.get(url);
  }
}
