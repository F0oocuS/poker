import { Component, OnDestroy, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

import { environment } from '../../../environments/environment';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	public games;

	constructor(private gameService: GameService) {}

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
}
