import {Component, Directive, Output, EventEmitter} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import { Page1 } from './page1';
import { Page2 } from './page2';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <router-outlet></router-outlet>
`
})
@RouteConfig([
    {path: '/page1/...',name : 'Page1' , component : Page1 },
    {path: '/page2/...', name : 'Page2' , component : Page2, useAsDefault: true  },
])
export class App {
  constructor() {
    this.name = 'Angular2';
  }  
}