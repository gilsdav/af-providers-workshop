import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModuleModule } from './modules/custom-module/custom-module.module';
import { LoggerModule } from './modules/logger-module/logger.module';
import { DynamicComponentModule } from './modules/dynamic-component-module/dynamic-component.module';
import { TestComponent } from './components/test/test.component';
import { AlternativeGuard } from './guards/alternative-guard.guard';

@NgModule({
	declarations: [
		AppComponent,
		TestComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomModuleModule.forRoot({
			mode: 'dark',
			// enableGuard: true,
			// altGuard: AlternativeGuard,

		}),
		NgbModule,
		LoggerModule.forRoot({
			// loggers: environment.loggers
		}),
		DynamicComponentModule.forRoot({
			components: {
				'test': TestComponent
			}
		})
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
