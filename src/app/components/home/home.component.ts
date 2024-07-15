import { Component } from '@angular/core';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tiles: Tile[] = [];
  title: string = 'Dashboard';

  ngOnInit(){
    this.setupTiles();
    console.log(this.tiles);
  }

  setupTiles(){
    this.tiles.push(new Tile("login", 'Logout', 'Click to log out of application', 'assets/images/gen/login.png'));
    this.tiles.push(new Tile("user-invoices", 'View Invoices', 'Click to log out of application','assets/images/gen/invoice.png'));
    this.tiles.push(new Tile("admin-product-list", 'View Products', 'Click to log out of application',''));
  }
}
