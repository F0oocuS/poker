import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { Subscription } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GameService } from '../../services/game.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	public games;
	public isAuth: boolean;

	constructor(private gameService: GameService, private userService: UserService, private router: Router) {}

	public ngOnInit() {
		// io.connect(environment.domain);

		this.subscription = this.gameService.getAllGames().subscribe(
			result => {
				console.log(result);

				this.games = result.games;
			},
			error => {
				console.log(error);
			}
		);
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	public connectToGame(gameId: number) {
		if (this.userService.isLogin.getValue()) {
			this.gameService.addUserToGame(gameId).subscribe(
				() => {
					this.router.navigateByUrl('/game/' + gameId);
				},
				error => {
					console.log(error);
				}
			);
		} else {
			this.router.navigateByUrl('/signin');
		}
	}
}
