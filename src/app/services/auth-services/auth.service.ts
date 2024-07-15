import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../models/user/loginDto';
import { NewUserDto } from '../../models/user/newUserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://localhost:5001/api/v1";

  constructor(private httpClient: HttpClient) { }

  login(login: LoginDto){
    const url = `${this.apiUrl}/auth`;
    
    return this.httpClient.post(url,login);
  }

  createUser(user: NewUserDto){
    const url = `${this.apiUrl}/auth/create`;
    
    return this.httpClient.post(url,user);
  }
}
