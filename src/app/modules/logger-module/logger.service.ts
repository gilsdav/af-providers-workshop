import { Inject, Injectable, Optional } from '@angular/core';

import { BaseLogger, LOGGERS } from './base.logger';

@Injectable()
export class LoggerService {
	constructor(@Optional() @Inject(LOGGERS) private loggers: BaseLogger[]) {
		if (!loggers) {
			throw new Error('No loggers found, please use LoggerModule.forRoot(...) into your AppComponent');
		}
	}

	public log(message: string): void {
		this.loggers.forEach(logger => logger.log(message));
	}

	public error(message: string): void {
		this.loggers.forEach(logger => logger.error(message));
	}
}
