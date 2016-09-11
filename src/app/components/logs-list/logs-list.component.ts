import { Component, OnInit } from '@angular/core';

import { LoggerService, LogEntry, LogLevel } from '../../services/logger.service';

@Component({
    selector: 'app-logs-list',
    templateUrl: './logs-list.component.html',
    styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {
    logEntries: LogEntry[];

    constructor(private logger: LoggerService) {
    }

    ngOnInit() {
        this.logEntries = this.logger.getPreviousLogEntries();
        this.logger.getFutureLogEntries()
            .subscribe(logEntry => this.logEntries.push(logEntry));
    }

    getLogLevelCssClass(logEntry: LogEntry): string {
        return LogLevel[logEntry.level].toLowerCase();
    }
}
