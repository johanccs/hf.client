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
    this.tiles.push(new Tile("logout", 'Logout', 'Click to log out of application'));
    this.tiles.push(new Tile("view-invoices", 'View Invoices', 'Click to log out of application'));
    this.tiles.push(new Tile("view-products", 'View Products', 'Click to log out of application'));
  }
}
