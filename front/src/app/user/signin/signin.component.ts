import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
	private hidePassword = true;
	private signInForm: FormGroup;
	constructor(private userService: UserService) {}

	public ngOnInit() {
		this.initForm();
	}

	private initForm(): void {
		this.signInForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.email
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(4)
			])
		});
	}

	private onSubmit() {
		const { email, password } = this.signInForm.value;

		this.userService.onSignIn({ email, password }).subscribe(
			result => {
				if (result.token) {
					window.localStorage.setItem('token', result.token);
				}
				console.log(result);
			},
			error => {
				console.log(error);
			}
		);
	}

	public getEmailErrorMessage() {
		return this.signInForm
			.get('email').hasError('required') ? 'Email is required field' : this.signInForm
			.get('email').hasError('email') ? 'Enter valid email' : '';
	}
}
