import { Type } from '@angular/core';
import { BaseLogger } from './base.logger';
import { ConsoleLogger } from './loggers/console.logger';


export type LoggerConfig = {
	loggers: Type<BaseLogger>[]
};

export const defaultLoggerConfig: LoggerConfig = {
	loggers: [
		ConsoleLogger
	]
}
