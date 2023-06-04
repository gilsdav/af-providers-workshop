import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModuleModule } from './modules/custom-module/custom-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomModuleModule.forRoot({
			// mode: 'dark'
		}),
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
