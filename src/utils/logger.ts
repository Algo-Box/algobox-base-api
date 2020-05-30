import { Request, Response } from 'express';
import config from '../config';

/**
 * logger utility
 * @param {Request} req request
 * @param {Response} res resonse
 * @param {Function} next next
 * @returns {void}
 */
export function logger(req: Request, res: Response, next: Function): void {
  if (config.ENV.NODE_ENV === 'DEV') {
    console.time('Request Took');
    // eslint-disable-next-line callback-return
    next();
    console.log(`${req.method} ${req.url}`);
    console.timeEnd('Request Took');
    return;
  }
  // Custom logger logc
  // eslint-disable-next-line consistent-return
  return next();
}
