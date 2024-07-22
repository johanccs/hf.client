import { Component } from '@angular/core';

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


}
