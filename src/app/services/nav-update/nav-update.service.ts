import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListUserDto } from '../../models/user/listUserDto';

@Injectable({
  providedIn: 'root'
})
export class NavUpdateService {

  private src = new BehaviorSubject(false);
  current = this.src.asObservable();
  
  private greetingBeh = new BehaviorSubject('');
  greeting = this.greetingBeh.asObservable();

  constructor() { }

  changeMenu(isAdmin: boolean){
    this.src.next(isAdmin);
  }

  displayGreeting(user: ListUserDto){
    this.greetingBeh.next(`${user.name} ${user.surname}`);
  }
}
