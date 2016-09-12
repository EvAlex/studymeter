import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class ServiceWorkerService {

    constructor(private logger: LoggerService) {
    }

    register(): Promise<any> {
        let res: Promise<any>;
        if ('serviceWorker' in navigator) {
            res = navigator.serviceWorker.register('/assets/sw.js', { scope: '/assets/' })
                .then(r => this.onServiceWorkerRegistered(r), e => this.onServiceWorkerRegistrationFailed(e));
        } else {
            let message = 'No ServiceWorker API available';
            this.logger.info(message);
            res = Promise.reject(message);
        }
        return res;
    }

    private onServiceWorkerRegistered(reg: ServiceWorkerRegistration) {
        if (reg.installing) {
            this.logger.info('Service worker installing');
        } else if (reg.waiting) {
            this.logger.info('Service worker installed');
        } else if (reg.active) {
            this.logger.info('Service worker active');
        }
        return reg;
    }

    private onServiceWorkerRegistrationFailed(error) {
        let message = 'Registration failed with ' + error;
        this.logger.error(message);
        return Promise.reject(message);
    }
}
