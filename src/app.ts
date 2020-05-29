import express from 'express';
import cors from 'cors';
import { Config } from './config/config';
import { Logger } from './utils/logger';

async function Main() {

  /** Initialize App */
  const App = express();

  /** Initialize Configs */
  Config();

  /** Configure MiddleWare */
  App.use(Logger());
  App.use(express.json());
  App.use(cors());

  /** Initialize Routes */
  App.use("/", require('./routes/router'));

  /** Listen to Port */
  App.listen(process.env.PORT, () => {
    console.log(`Listening to PORT ${process.env.PORT}`);
  });
}

Main()