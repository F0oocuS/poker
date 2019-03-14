import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.userService.isLogin.getValue()) {
			return true;
		}

		this.router.navigateByUrl('/signin');

		return false;
	}
}
