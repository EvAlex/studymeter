
+function () {
    "use strict";

    var app = new StudymeterApp();
    app.initialize();

    function StudymeterApp() {
        var logger = null;

        this.initialize = initialize;

        /////////////////////////////////////////////

        function initialize() {
            logger = new Logger();

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js', { scope: './' })
                    .then(onServiceWorkerRegistered, onServiceWorkerRegistrationFailed);
            } else {
                logger.info('No ServiceWorker API available');
            }
        }

        function onServiceWorkerRegistered(reg) {
            if (reg.installing) {
                logger.info('Service worker installing');
            } else if (reg.waiting) {
                logger.info('Service worker installed');
            } else if (reg.active) {
                logger.info('Service worker active');
            }
        }

        function onServiceWorkerRegistrationFailed(error) {
            logger.error('Registration failed with ' + error);
        }
    }

    

    

    

}();
