import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './global/home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AccountComponent } from './user/account/account.component';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';

import { AuthGuardService } from './services/auth-guard.service';
import { GameComponent } from './game/game.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'test', component: TestComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
	{ path: 'game/:id', component: GameComponent },
	{ path: '404', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '404'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
