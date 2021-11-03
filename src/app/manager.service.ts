/* manager service created by angular CLI ng generate service */
/* service in Angular can be used to store data right here */

import { Injectable } from '@angular/core';
import { Shoes } from './shoes';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  firstShoe: Shoes { brand: 'Nike', color: 'blue' }
  secondShoe: Shoes { brand: 'Addidas', color: 'black' }
  
  myShoes: Shoes[] = [this.firstShoe, this.secondShoe];

  /* Methods within the class body of the service are used to export data out of the service */
  getShoes() {
    return this.myShoes;
  }

  constructor() { }
}
