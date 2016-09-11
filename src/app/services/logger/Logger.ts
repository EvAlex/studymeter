import { LogEntry } from './LogEntry';
import { LogLevel } from './LogLevel';
import * as Rx from 'rxjs/Rx';

export class Logger {
    private logEntries: LogEntry[];
    private logEntriesSubject: Rx.Subject<LogEntry>;

    constructor() {
        this.logEntries = [];
        this.logEntriesSubject = new Rx.Subject<LogEntry>();
    }

    public getPreviousLogEntries(): LogEntry[] {
        return this.logEntries.slice();
    }

    public getFutureLogEntries(): Rx.Observable<LogEntry> {
        return this.logEntriesSubject;
    }

    public trace(msg: string) {
        this.log(msg, LogLevel.Trace);
    }

    public debug(msg: string) {
        this.log(msg, LogLevel.Debug);
    }

    public info(msg: string) {
        this.log(msg, LogLevel.Info);
    }

    public warn(msg: string) {
        this.log(msg, LogLevel.Warn);
    }

    public error(msg: string) {
        this.log(msg, LogLevel.Error);
    }

    public fatal(msg: string) {
        this.log(msg, LogLevel.Fatal);
    }

    public log(msg: string, level: LogLevel): void {
        let logEntry = new LogEntry(msg, level);
        this.logEntries.push(logEntry);
        this.logEntriesSubject.next(logEntry);
    }
}
