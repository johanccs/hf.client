import { Component } from '@angular/core';
import { ListUserDto } from '../../../../models/user/listUserDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  user: ListUserDto;
  title = 'User Detail';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(param => {
      this.user = param as ListUserDto;
    });
  }

}
