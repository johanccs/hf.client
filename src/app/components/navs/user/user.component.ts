import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavUpdateService } from '../../../services/nav-update/nav-update.service';
import { CartCountService } from '../../../services/cartcount-service/cartcount-service.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage } from '../../../helpers/localStorage';

@Component({
  selector: 'app-nav-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  localStorage: LocalStorage;
  itemCount = 0;
  constructor(
    private router:Router,
    private cartCountService: CartCountService){}

  ngOnInit(){
    this.cartCountService.initCount.subscribe(data => {
      this.itemCount = data;
    });

    this.localStorage = new LocalStorage();
    this.localStorage.clearCredentials('cred_cache');
    this.localStorage.clearCredentials('jwt');
  }

  logout(){
    this.router.navigate(['login']);
  }
}
