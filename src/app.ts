import express from 'express';
import cors from 'cors';
import { config } from './config';
import { Logger } from './utils';
import { connect } from './db';

/**
 * Main Function
 */
async function Main() {

  /** Initialize app */
  const app = express();

  /** Initialize Configs */
  config();

  /** Configure MiddleWare */
  app.use(Logger());
  app.use(express.json());
  app.use(cors());

  /** Initialize Routes */
  app.use('/', require('./routes/router'));

  /** Await DB Connection */
  await connect();

  /** Listen to Port */
  app.listen(process.env.PORT, () => {
    console.log(`Listening to PORT ${process.env.PORT}`);
  });
}

Main()