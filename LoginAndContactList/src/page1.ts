import { Component, Directive, Output, EventEmitter } from 'angular2/core'
import { ROUTER_DIRECTIVES, RouteConfig, Router } from 'angular2/router';

import { AboutComponent } from './about';
import { ContactComponent } from './contact';

@Component({
  selector: 'page1',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <h2>welcome {{userName}}</h2>
  <nav>
    <a [routerLink]="['/Page1','About']" routerLinkActive="active">About</a>
    <a [routerLink]="['/Page1','Contact']" routerLinkActive="active">Contact</a>
    <a [routerLink]="['/Page2','User']" routerLinkActive="active">User</a>
    <a [routerLink]="['/Page2','Login']" (click)="logout()">Logout</a>
  </nav>
  <router-outlet></router-outlet>
`
})
@RouteConfig([
    {path: '/about', name : 'About' , component : AboutComponent, useAsDefault: true},
    {path : '/contact', name : 'Contact' , component : ContactComponent}
])
export class Page1 {
    
    constructor(private router: Router){
      this.userName = localStorage.getItem('userName');
      if(!this.userName){
        this.router.navigateByUrl('page2'); 
      }
    }

    logout(){
      localStorage.setItem('userName', '');
    }
}