import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { defaultLoggerConfig, LoggerConfig } from './logger.config';
import { LOGGERS } from './base.logger';
import { LoggerService } from './logger.service';

@NgModule({
	declarations: [],
	imports: [ CommonModule ],
	exports: [],
	providers: [],
})
export class LoggerModule {

	public static forRoot(config?: Partial<LoggerConfig>): ModuleWithProviders<LoggerModule> {
		const loggerConfig = config ? { ...defaultLoggerConfig, ...config } : defaultLoggerConfig;
		return {
			ngModule: LoggerModule,
			providers: [
				LoggerService,
				...loggerConfig.loggers.map(log => ({
					provide: LOGGERS,
					multi: true,
					useClass: log
				}))
			]
		};
	}
}
