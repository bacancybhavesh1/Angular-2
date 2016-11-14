import { Injectable } from 'angular2/core';

@Injectable()
export class ContactService {
	contactList = ['aaaa', 'bbbb', 'cccc', 'ddddd'];

	getContact() {
		return this.contactList;
	}

   	addContact(name) {
    	return name;
  	}

  	updateContact(selectedIndex, editCon) {
  		for(var i=0; i<this.contactList.length; i++){
			if(selectedIndex == i){
				this.contactList[i] = editCon;
			}
		}
  	}

  	deleteContact(index) {
  		this.contactList.splice(index, 1);
  	}
}