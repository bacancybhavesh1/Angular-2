import { Component, Directive, Output, EventEmitter } from 'angular2/core';
import { FormBuilder, Validators }    from 'angular2/common';
import { Router } from 'angular2/router';

@Component({
	selector:'login',
	directives: [],
	template: `
  		<div class="container">
	  		<h1>Login Page</h1>
	  		<form [ngFormModel]="loginForm" (ngSubmit)="login($event)">
	  			<div class="form-group" [ngClass]="{'has-error':!loginForm.value.username.valid}">
        			<label for="username">Username</label>
			    	<input ngControl="username" type="text" placeholder="Username" >
			    	<div *ngIf="loginForm.value.username == ''" class="alert alert-danger">Please enter Username</div>
			    </div>
			    <div class="form-group">
        			<label for="password">Password</label>
			    	<input ngControl="password" type="password" placeholder="Password">
			    	<div *ngIf="loginForm.value.password == ''" class="alert alert-danger">Please enter Password</div>
			    </div>
			  	<button type="submit" [disabled]="loginForm.value.username == '' || loginForm.value.password == ''">Log in</button>
			</form>
		</div>
  	`
})
export class LoginComponent{

 	constructor(private router: Router, fb: FormBuilder) {
	    this.loginForm = fb.group({
	      username: ['', Validators.required],
	      password: ['', Validators.required]
	    });
	}

	login(event){
		if(this.loginForm.value.username == 'bhavesh' && this.loginForm.value.password == 'bhavesh'){
			localStorage.setItem('userName', this.loginForm.value.username);
			this.router.navigateByUrl('page1');	
		}else{
			if(this.loginForm.value.username == 'tejas' && this.loginForm.value.password == 'tejas'){
				localStorage.setItem('userName', this.loginForm.value.username);
				this.router.navigateByUrl('page1');	
			}else{
				alert('wrong data');	
			}
		}
	}
}