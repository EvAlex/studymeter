
var logger = new Logger();
            
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function (reg) {

        if (reg.installing) {
            logger.info('Service worker installing');
        } else if (reg.waiting) {
            logger.info('Service worker installed');
        } else if (reg.active) {
            logger.info('Service worker active');
        }

    }).catch(function (error) {
        // registration failed
        logger.error('Registration failed with ' + error);

        logger.info('Service worker installing');
            logger.info('Service worker installing');
            logger.info('Service worker installing');
    });
};


function Logger() {

    this.log = log;
    this.info = info;
    this.error = error;

    activate();

    /////////////////////////////////////////////
    var self = this,
        element = document.getElementById('logs-cont'),
        Months = __enum('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

    function activate() {
    }

    function log(msg) {
        info(msg);
    }

    function info(msg) {
        var logEntry = new LogEntry(msg, LogLevels.info);
        appendLogEntry(logEntry);
    }

    function error(msg) {
        var logEntry = new LogEntry(msg, LogLevels.error);
        appendLogEntry(logEntry);
    }

    function appendLogEntry(logEntry) {
        var time = formatTime(logEntry.time),
            level = formatLogLevel(LogLevels[logEntry.level]),
            message = time + '> [' + level + '] ' + logEntry.message,
            li = document.createElement('li');
        li.classList.add('logs-list-item');
        li.classList.add(LogLevels[logEntry.level]);
        li.innerText = message;
        element.appendChild(li);
    }

    /** @param {Date} time */
    function formatTime(time) {
        var d = padLeft(time.getDate(), 2, '0'),
            m = Months[time.getMonth()],
            y = time.getFullYear(),
            h = padLeft(time.getHours(), 2, '0'),
            min = padLeft(time.getMinutes(), 2, '0'),
            s = padLeft(time.getSeconds(), 2, '0'),
            ms = padLeft(time.getMilliseconds(), 3, '0'),
            res = d + '-' + m + '-' + y + ' ' + h + ':' + min + ':' + s + '.' + ms;
        return res;
    }

    function formatLogLevel(level) {
        var length = 0;
        for (var key in LogLevels) {
            if (LogLevels.hasOwnProperty(key) && key.length > length) {
                length = key.length;
            }
        }
        return padLeft(level.toUpperCase(), length, ' ');
    }

    function padLeft(str, requiredLength, ch) {
        str = '' + str;
        while (str.length < requiredLength) {
            str = ch + str;
        }
        return str;
    }
}

function LogEntry(msg, level) {
    this.message = msg;
    this.level = level;
    this.time = new Date();
}

var LogLevels = __enum('trace', 'debug', 'info', 'warn', 'error', 'fatal');

function __enum() {
    var fields = Array.prototype.slice.call(arguments),
        res = {};
    for (var i = 0; i < fields.length; i++) {
        res[i] = fields[i];
        res[fields[i]] = i;
    }
    return res;
}