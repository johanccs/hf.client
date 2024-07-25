import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavUpdateService } from '../../../services/nav-update/nav-update.service';
import { CartCountService } from '../../../services/cartcount-service/cartcount-service.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  itemCount = 0;
  constructor(private router:Router, private cartCountService: CartCountService){}

  ngOnInit(){
    this.cartCountService.initCount.subscribe(data => {
      this.itemCount = data;
    })
  }

  logout(){
    this.router.navigate(['login']);
  }

}
