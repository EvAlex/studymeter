import { Injectable } from '@angular/core';

import { Logger } from './logger';

export { LogEntry, LogLevel } from './logger';

@Injectable()
export class LoggerService extends Logger {

  constructor() {
      super();
  }

}
