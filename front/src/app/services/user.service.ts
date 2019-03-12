import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private domain = environment.domain;
	public isLogIn = false;

	constructor(private httpClient: HttpClient) {}

	// TODO fix Observable type
	public onSignUp(user: UserInterface): Observable<any> {
		return this.httpClient.post(this.domain + '/signup', user);
	}

	public onSignIn(user: UserInterface): Observable<any> {
		return this.httpClient.post(this.domain + '/signin', user);
	}
}
