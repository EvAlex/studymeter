import { LogLevel } from './LogLevel';
import { MonthAlpha3 } from './Month';

export class LogEntry {
    message: string;
    level: LogLevel;
    time: Date;

    constructor(msg: string, level: LogLevel) {
        this.message = msg;
        this.level = level;
        this.time = new Date();
    }

    public formatTime(): string {
        let d = this.padLeft(this.time.getDate(), 2, '0'),
            m = MonthAlpha3[this.time.getMonth()],
            y = this.time.getFullYear(),
            h = this.padLeft(this.time.getHours(), 2, '0'),
            min = this.padLeft(this.time.getMinutes(), 2, '0'),
            s = this.padLeft(this.time.getSeconds(), 2, '0'),
            ms = this.padLeft(this.time.getMilliseconds(), 3, '0'),
            res = d + '-' + m + '-' + y + ' ' + h + ':' + min + ':' + s + '.' + ms;
        return res;
    }

    public formatLogLevel(): string {
        let levelStr = LogLevel[this.level],
            length = 0;
        for (let key in LogLevel) {
            if (LogLevel.hasOwnProperty(key) && key.length > length) {
                length = key.length;
            }
        }
        return this.padLeft(levelStr.toUpperCase(), length, ' ');
    }

    private padLeft(str: any, requiredLength: number, ch: string): string {
        str = '' + str;
        while (str.length < requiredLength) {
            str = ch + str;
        }
        return str;
    }
}
