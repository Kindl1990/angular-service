import { Component } from '@angular/core';

/* import service to component */
import { ManagerService } from './manager.service';
import { Shoes } from './shoes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myShoes: Shoes[];

    /* variable managerService of type ManagerService */
    constructor (private managerService: ManagerService) {
      this.myShoes = this.managerService.getShoes();
    }

    /* use of the component by service */


  

}
