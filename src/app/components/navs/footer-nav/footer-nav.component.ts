import { Component } from '@angular/core';
import { NavUpdateService } from '../../../services/nav-update/nav-update.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.css'
})
export class FooterNavComponent {

  alternativeLogged: "";
  welcomeMsg = "Good morning";
  currentDate = new Date().toISOString().slice(0,19);
  version = '1.0.1-beta';

  constructor(private navService:NavUpdateService){}

  ngOnInit(){
    this.navService.greeting.subscribe(data => {
      this.welcomeMsg = data; 
    });
  }
}
