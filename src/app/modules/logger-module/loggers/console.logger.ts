import { Injectable } from '@angular/core';
import { BaseLogger } from '../base.logger';
import { LogLevelEnum } from '../log-level.enum';

@Injectable()
export class ConsoleLogger extends BaseLogger {

    protected processLog(level: LogLevelEnum, message: string): void {
        switch (level) {
            case LogLevelEnum.Info:
                console.log(message);
                break;
            case LogLevelEnum.Error:
                console.error(message);
                break;
        }
    }

}
