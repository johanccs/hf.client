import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {

  private itemCount = new BehaviorSubject(0);
  initCount = this.itemCount.asObservable();

  constructor() { }

  cartCount(count: number){
    this.itemCount.next(count);
  }
}
