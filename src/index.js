const logger = require('../logger');

logger.info('hello world');
logger.warn('look out world');
logger.error('goodbye world', 'something else', { third: 'thing' });
