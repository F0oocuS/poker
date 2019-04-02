import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	private socket;
	private domain = environment.domain;

	constructor() {
		this.socket = io(this.domain);
	}

	public sendMessage(message: string): void {
		this.socket.emit('new-message', message);
	}

	public getMessage(): Observable<string> {
		return Observable.create(observer => {
			this.socket.on('new-message', message => {
				observer.next(message);
			});
		});
	}
}
