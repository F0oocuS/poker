import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule, MatListModule, MatTableModule, MatTabsModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule,
		MatGridListModule,
		MatTabsModule,
		MatTableModule,
		MatListModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule,
		MatGridListModule,
		MatTabsModule,
		MatTableModule,
		MatListModule
	]
})

export class MaterialModule {}
