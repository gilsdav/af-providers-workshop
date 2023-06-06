import { Injectable, InjectionToken } from '@angular/core';

import { LogLevelEnum } from './log-level.enum';

export const LOGGERS = new InjectionToken<BaseLogger>('LOGGERS');

@Injectable()
export abstract class BaseLogger {

	public log(message: string): void {
		this.processLog(LogLevelEnum.Info, message);
	}

	public error(message: string): void {
		this.processLog(LogLevelEnum.Error, message);
	}

	protected abstract processLog(level: LogLevelEnum, message: string): void;

}
