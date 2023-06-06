import { Injectable } from '@angular/core';
import { BaseLogger } from '../base.logger';
import { LogLevelEnum } from '../log-level.enum';

@Injectable()
export class ConsoleBisLogger extends BaseLogger {

    protected processLog(level: LogLevelEnum, message: string): void {
        switch (level) {
            case LogLevelEnum.Info:
                console.log('bis', message);
                break;
            case LogLevelEnum.Error:
                console.error('bis', message);
                break;
        }
    }

}
