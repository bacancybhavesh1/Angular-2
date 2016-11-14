System.register(['angular2/core', 'angular2/router', './user', './login'], function(exports_1, context_1) {
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
    var core_1, router_1, user_1, login_1;
    var Page2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            Page2 = (function () {
                function Page2() {
                }
                Page2 = __decorate([
                    core_1.Component({
                        selector: 'page2',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <!-- <h2>page2</h2> -->\n\n  <router-outlet></router-outlet>\n"
                    }),
                    router_1.RouteConfig([
                        { path: '/user', name: 'User', component: user_1.UserComponent },
                        { path: '/login', name: 'Login', component: login_1.LoginComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Page2);
                return Page2;
            }());
            exports_1("Page2", Page2);
        }
    }
});
//# sourceMappingURL=page2.js.map