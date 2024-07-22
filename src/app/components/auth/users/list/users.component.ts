import { Component } from '@angular/core';
import { ListUserDto } from '../../../../models/user/listUserDto';
import { AuthService } from '../../../../services/auth-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users: ListUserDto[] = [];

  constructor(private authService: AuthService, private router:Router){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.authService.getUsers().subscribe(data => {
      let internal_users = data as ListUserDto[];
      this.users = internal_users.map(u => {
        return new ListUserDto(
          u.id.slice(0,5), 
          u.name, 
          u.surname,
          u.email, 
          u.username, 
          u.isAdmin, u.dateRegistered, u.accountLocked);
      });
    })
  }

  modifyUser(user: ListUserDto){
    this.router.navigate(['user'], {queryParams: user});
  }
}
