System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, fb) {
                    this.router = router;
                    this.loginForm = fb.group({
                        username: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                }
                LoginComponent.prototype.login = function (event) {
                    if (this.loginForm.value.username == 'bhavesh' && this.loginForm.value.password == 'bhavesh') {
                        localStorage.setItem('userName', this.loginForm.value.username);
                        this.router.navigateByUrl('page1');
                    }
                    else {
                        if (this.loginForm.value.username == 'tejas' && this.loginForm.value.password == 'tejas') {
                            localStorage.setItem('userName', this.loginForm.value.username);
                            this.router.navigateByUrl('page1');
                        }
                        else {
                            alert('wrong data');
                        }
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [],
                        template: "\n  \t\t<div class=\"container\">\n\t  \t\t<h1>Login Page</h1>\n\t  \t\t<form [ngFormModel]=\"loginForm\" (ngSubmit)=\"login($event)\">\n\t  \t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error':!loginForm.value.username.valid}\">\n        \t\t\t<label for=\"username\">Username</label>\n\t\t\t    \t<input ngControl=\"username\" type=\"text\" placeholder=\"Username\" >\n\t\t\t    \t<div *ngIf=\"loginForm.value.username == ''\" class=\"alert alert-danger\">Please enter Username</div>\n\t\t\t    </div>\n\t\t\t    <div class=\"form-group\">\n        \t\t\t<label for=\"password\">Password</label>\n\t\t\t    \t<input ngControl=\"password\" type=\"password\" placeholder=\"Password\">\n\t\t\t    \t<div *ngIf=\"loginForm.value.password == ''\" class=\"alert alert-danger\">Please enter Password</div>\n\t\t\t    </div>\n\t\t\t  \t<button type=\"submit\" [disabled]=\"loginForm.value.username == '' || loginForm.value.password == ''\">Log in</button>\n\t\t\t</form>\n\t\t</div>\n  \t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map