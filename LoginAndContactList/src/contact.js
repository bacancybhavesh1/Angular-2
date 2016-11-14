System.register(['angular2/core', './services/contactService', './directive/highLight'], function(exports_1, context_1) {
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
    var core_1, contactService_1, highLight_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contactService_1_1) {
                contactService_1 = contactService_1_1;
            },
            function (highLight_1_1) {
                highLight_1 = highLight_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_callService) {
                    this._callService = _callService;
                    this.contactList = [];
                    this.addCon = editCon = selectedIndex = '';
                    this.contactList = this._callService.getContact();
                }
                ContactComponent.prototype.addContact = function () {
                    this.contactList.push(this._callService.addContact(this.addCon));
                    this.addCon = '';
                };
                ContactComponent.prototype.editContact = function (con, index) {
                    this.editCon = con;
                    this.selectedIndex = index;
                };
                ContactComponent.prototype.updateContact = function () {
                    this._callService.updateContact(this.selectedIndex, this.editCon);
                    this.contactList = this._callService.getContact();
                    this.editCon = this.selectedIndex = '';
                };
                ContactComponent.prototype.deleteContact = function (index) {
                    this._callService.deleteContact(index);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        directives: [highLight_1.HighlightDirective],
                        template: "\n\t   <div>\n\t  \t<h2>Add Contact</h2>\n\t  \t<input type=\"text\" [(ngModel)]=\"addCon\">\n\t  \t<button (click)=\"addContact()\"> Add </button>\n\t  </div>\n\t  <h2>Contact List</h2>\n\t  <ul>\n\t  \t<li *ngFor=\"#con of contactList; #i = index\" [attr.data-index]=\"i\" (click)=\"editContact(con, i)\" >\n\t  \t<span myHighlight>{{con}}</span> <button (click)=\"deleteContact(i)\">X</button></li>\n\t  </ul>\n\t \n\t  <div *ngIf=\"editCon\">\n\t  \t<h2>Edit Contact</h2>\n\t  \t<input type=\"text\" [(ngModel)]=\"editCon\">\n\t  \t<button (click)=\"updateContact()\"> Update </button>\n\t  </div>\n\t",
                        providers: [contactService_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contactService_1.ContactService])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.js.map