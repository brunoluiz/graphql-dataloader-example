import * as bunyan from 'bunyan';

export const log = bunyan.createLogger({
  name: 'api',
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
});
