System.register(['angular2/core', 'angular2/router', './about', './contact'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, about_1, contact_1;
    var Page1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            Page1 = (function () {
                function Page1(router) {
                    this.router = router;
                    this.userName = localStorage.getItem('userName');
                    if (!this.userName) {
                        this.router.navigateByUrl('page2');
                    }
                }
                Page1.prototype.logout = function () {
                    localStorage.setItem('userName', '');
                };
                Page1 = __decorate([
                    core_1.Component({
                        selector: 'page1',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <h2>welcome {{userName}}</h2>\n  <nav>\n    <a [routerLink]=\"['/Page1','About']\" routerLinkActive=\"active\">About</a>\n    <a [routerLink]=\"['/Page1','Contact']\" routerLinkActive=\"active\">Contact</a>\n    <a [routerLink]=\"['/Page2','User']\" routerLinkActive=\"active\">User</a>\n    <a [routerLink]=\"['/Page2','Login']\" (click)=\"logout()\">Logout</a>\n  </nav>\n  <router-outlet></router-outlet>\n"
                    }),
                    router_1.RouteConfig([
                        { path: '/about', name: 'About', component: about_1.AboutComponent, useAsDefault: true },
                        { path: '/contact', name: 'Contact', component: contact_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Page1);
                return Page1;
            }());
            exports_1("Page1", Page1);
        }
    }
});
//# sourceMappingURL=page1.js.map