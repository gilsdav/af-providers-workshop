import { Inject, Injectable } from '@angular/core';

import { BaseLogger, LOGGERS } from './base.logger';

@Injectable()
export class LoggerService {
	constructor(@Inject(LOGGERS) private loggers: BaseLogger[]) { }

	public log(message: string): void {
		this.loggers.forEach(logger => logger.log(message));
	}

	public error(message: string): void {
		this.loggers.forEach(logger => logger.error(message));
	}
}
