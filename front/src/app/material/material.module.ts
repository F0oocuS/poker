import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule
	]
})

export class MaterialModule {}
