const logger = require('pino')({
  browser: {
    transmit: {
      level: 'warn',
      send(level, logEvent) {
        console.log('THE LOG MESSAGE TO SEND VIA AJAX', `(${level}):`, logEvent.messages);
      },
    },
  },
});

module.exports = logger;
