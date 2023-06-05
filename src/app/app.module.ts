import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModuleModule } from './modules/custom-module/custom-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { USER_SERVICE } from './modules/custom-module/types/config.type';
import { AlternativeUserService } from './services/alternative-user.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomModuleModule.forRoot({
			// mode: 'dark',
			// enableGuard: true,
			// altGuard: AlternativeGuard,
			// userService: { provide: USER_SERVICE, useClass: AlternativeUserService }
		}),
		NgbModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
