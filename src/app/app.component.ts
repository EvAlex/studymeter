import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { LoggerService }  from './services/logger.service';
import { ServiceWorkerService } from './services/service-worker.service';
import { LogsListComponent } from './components/logs-list/logs-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [LoggerService, ServiceWorkerService],
    viewProviders: [LogsListComponent]
})
export class AppComponent implements OnInit {
    title = 'app works!';
    auth: FirebaseAuthState = null;
    authLoading: boolean;

    constructor(
        public af: AngularFire,
        private logger: LoggerService,
        private serviceWorkerService: ServiceWorkerService) {
    }

    ngOnInit(): void {
        this.logger.info('StudyMeter app initialized.');
        this.serviceWorkerService.register();

        this.authLoading = true;
        this.af.auth.subscribe(auth => {
            this.auth = auth ? auth.auth : null;
            this.authLoading = false;
        }, err => {
            this.authLoading = false;
            this.logger.error('Failed to load uth state. ' + err)
        });
    }

    public login(): void {
        this.af.auth.login();
    }

    public logout(): void {
        this.af.auth.logout();
        this.auth = null;
    }
}
