import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class GameService {
	private domain = environment.domain;

	constructor(private httpClient: HttpClient) {}

	// TODO add game interface and returned type
	public getAllGames(): any {
		return this.httpClient.get(this.domain + '/game');
	}

	public getSingleGame(id: number): any {
		return this.httpClient.get(this.domain + '/game/' + id);
	}

	public addUserToGame(gameId: number): any {
		return this.httpClient.get(this.domain + '/game/' + gameId + '/connect', {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}
}
