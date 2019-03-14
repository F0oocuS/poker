import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
	public signUpForm: FormGroup;
	public hidePassword = true;

	constructor(private userService: UserService, private router: Router) {}

	public ngOnInit() {
		this.initForm();
	}

	private initForm() {
		this.signUpForm = new FormGroup({
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

	public onSubmit() {
		const { email, password } = this.signUpForm.value;

		this.userService.onSignUp({ email, password }).subscribe(
			result => {
				if (result.token) {
					window.localStorage.setItem('token', result.token);

					this.userService.isLogin.next(true);

					// TODO find what do with returned promise
					this.router.navigateByUrl('/');
				}

				this.signUpForm.reset();

				console.log(result);
			},
			error => {
				console.log(error);
			}
		);
	}

	public getEmailErrorMessage() {
		return this.signUpForm
			.get('email').hasError('required') ? 'Email is required field' : this.signUpForm
			.get('email').hasError('email') ? 'Enter valid email' : '';
	}
}
