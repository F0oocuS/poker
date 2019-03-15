import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private domain = environment.domain;
	public isLogin = new BehaviorSubject<boolean>(UserService.checkIfHasToken());

	constructor(private httpClient: HttpClient) {}

	static checkIfHasToken(): boolean {
		return !!localStorage.getItem('token');
	}

	static getToken(): string {
		return localStorage.getItem('token');
	}

	static onLogOut(): void {
		localStorage.removeItem('token');
	}

	// TODO fix Observable type
	public onSignUp(user: UserInterface): Observable<any> {
		return this.httpClient.post(this.domain + '/signup', user);
	}

	public onSignIn(user: UserInterface): Observable<any> {
		return this.httpClient.post(this.domain + '/signin', user);
	}

	public getUser(): any {
		return this.httpClient.get(this.domain + '/user', {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}
}
