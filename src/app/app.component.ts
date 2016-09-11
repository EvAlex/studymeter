import { Component, OnInit } from '@angular/core';

import { LoggerService }  from './services/logger.service';
import { LogsListComponent } from './components/logs-list/logs-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LoggerService],
    directives: [LogsListComponent]
})
export class AppComponent implements OnInit {
    title = 'app works!';

    constructor(private logger: LoggerService) {
    }

    ngOnInit(): void {
        this.logger.info('StudyMeter app initialized.');
    }
}
