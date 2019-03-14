import { Component, OnDestroy, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
	private isLogin: boolean;
	private subscription: Subscription;

	constructor(private userService: UserService) {}

	public ngOnInit(): void {
		this.subscription = this.userService.isLogin.subscribe(result => {
			this.isLogin = result;
		});
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	public onLogout(): void {
		UserService.onLogOut();

		this.isLogin = UserService.checkIfHasToken();
	}
}
