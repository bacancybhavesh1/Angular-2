import {Component, Directive, Output, EventEmitter} from 'angular2/core';
import { ContactService } from './services/contactService';
import { HighlightDirective }  from './directive/highLight';

@Component({
  	selector: 'contact',
  	directives: [HighlightDirective],
  	template: `
	   <div>
	  	<h2>Add Contact</h2>
	  	<input type="text" [(ngModel)]="addCon">
	  	<button (click)="addContact()"> Add </button>
	  </div>
	  <h2>Contact List</h2>
	  <ul>
	  	<li *ngFor="#con of contactList; #i = index" [attr.data-index]="i" (click)="editContact(con, i)" >
	  	<span myHighlight>{{con}}</span> <button (click)="deleteContact(i)">X</button></li>
	  </ul>
	 
	  <div *ngIf="editCon">
	  	<h2>Edit Contact</h2>
	  	<input type="text" [(ngModel)]="editCon">
	  	<button (click)="updateContact()"> Update </button>
	  </div>
	`,
	providers: [ContactService]

})
export class ContactComponent {
	contactList = [];
	addCon = editCon = selectedIndex = '';

	constructor(private _callService: ContactService) { 
		this.contactList = this._callService.getContact();
	}

	addContact(){
		this.contactList.push(this._callService.addContact(this.addCon));
		this.addCon = '';
	}

	editContact(con, index){
		this.editCon = con;		
		this.selectedIndex = index;
	}

	updateContact(){
		this._callService.updateContact(this.selectedIndex, this.editCon);
		this.contactList = this._callService.getContact();
		this.editCon = this.selectedIndex = '';
	}

	deleteContact(index){
		this._callService.deleteContact(index);
	}
}