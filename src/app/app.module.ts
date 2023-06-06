import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModuleModule } from './modules/custom-module/custom-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlternativeUserService } from './services/alternative-user.service';
import { LoggerModule } from './modules/logger-module/logger.module';
import { environment } from '../environments/environment';

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
			// userService: AlternativeUserService
		}),
		NgbModule,
		LoggerModule.forRoot({
			// loggers: environment.loggers
		})
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
