import { Component } from '@angular/core';
import { NavUpdateService } from './services/nav-update/nav-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUserLoginType = false;

  constructor(private navUpdateService: NavUpdateService){}

  ngOnInit(){
    this.navUpdateService.current.subscribe(data=>{
      this.isUserLoginType = !data;
    });
  }
}
