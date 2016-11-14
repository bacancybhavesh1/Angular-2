import {Component, Directive, Output, EventEmitter} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import { UserComponent } from './user';
import { LoginComponent } from './login';

@Component({
  selector: 'page2',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <!-- <h2>page2</h2> -->

  <router-outlet></router-outlet>
`
})
@RouteConfig([
    {path: '/user', name : 'User' , component : UserComponent},
    {path:'/login', name:'Login', component: LoginComponent, useAsDefault: true}
])
export class Page2 {
}