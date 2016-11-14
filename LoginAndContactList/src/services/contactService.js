System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                    this.contactList = ['aaaa', 'bbbb', 'cccc', 'ddddd'];
                }
                ContactService.prototype.getContact = function () {
                    return this.contactList;
                };
                ContactService.prototype.addContact = function (name) {
                    return name;
                };
                ContactService.prototype.updateContact = function (selectedIndex, editCon) {
                    for (var i = 0; i < this.contactList.length; i++) {
                        if (selectedIndex == i) {
                            this.contactList[i] = editCon;
                        }
                    }
                };
                ContactService.prototype.deleteContact = function (index) {
                    this.contactList.splice(index, 1);
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});
//# sourceMappingURL=contactService.js.map