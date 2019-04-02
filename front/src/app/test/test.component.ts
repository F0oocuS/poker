import { Component, OnInit } from '@angular/core';

import { SocketService } from '../services/socket.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
	public message: string;
	public array: string[] = [];
	private subscription: Subscription;
	constructor(private socketService: SocketService) {}

	public ngOnInit() {
		this.subscription = this.socketService
			.getMessage()
			.subscribe(
				message => {
					console.log(message);
					this.array.push(message);
				},
				error => {
					console.log(error);
				}
			);
	}

	public sendMessage(): void {
		this.socketService.sendMessage(this.message);

		this.message = '';
	}


}
