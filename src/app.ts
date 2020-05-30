import express from 'express';
import cors from 'cors';
import config from './config';
import { logger } from './utils';
import { connect } from './db';

/**
 * Main Function
 */
async function main() {
  const app = express(); // Initialize App

  app.use(logger);
  app.use(express.json());
  app.use(cors());

  app.use('/', require('./routes/router'));

  /** Await DB Connection */
  await connect();

  /** Listen to Port */
  app.listen(config.ENV.PORT, () => {
    console.log(`Listening to PORT ${config.ENV.PORT}`);
  });
}

main();
