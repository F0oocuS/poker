import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameService } from '../services/game.service';
import { GameInterface } from '../interfaces/game.interface';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
	public gameId: number;
	public game: GameInterface;

	private subscription: Subscription;
	private gameSubscription: Subscription;

	constructor(private router: ActivatedRoute, private gameService: GameService) {}

	public ngOnInit() {
		this.subscription = this.router.paramMap.subscribe(result => {
			this.gameId = +result.get('id');
		});

		this.gameSubscription = this.gameService.getSingleGame(this.gameId).subscribe(
			(game: GameInterface): void => {
				this.game = game;
			},
			error => {
				if (error.status === 404) {

				}
				console.log(error);
			}
		);
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
		this.gameSubscription.unsubscribe();
	}
}
