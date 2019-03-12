import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './global/home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent},
	{ path: '404', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '404'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
