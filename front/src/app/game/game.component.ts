import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
	public id: number;
	private subscription: Subscription;

	constructor(private router: ActivatedRoute) {}

	public ngOnInit() {
		this.subscription = this.router.paramMap.subscribe(result => {
			this.id = +result.get('id');
		});
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
