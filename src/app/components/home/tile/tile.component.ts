import { Component, Input } from '@angular/core';
import { Tile } from '../../../models/tile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
@Input() tileDetail: Tile

constructor(private router: Router){}

  navigate(route:string){
    this.router.navigate([route]);
  }
}
