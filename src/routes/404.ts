import { Request, Response } from 'express';
import config from '../config';

/**
 * Handles Error Routes
 * @returns {Function} the Error Handling Function
 */
export function Error() {
  return (req: Request, res: Response) => {
    res
      .status(config.HttpCodes.BadRequest)
      .json({
        message: 'Page Not Found'
      });
  };
}
