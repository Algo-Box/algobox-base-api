import { Response } from 'express';
import config from '../config';

/**
 * Utility function to write response
 * @param {any} data Data Object
 * @param {any} error Error Object
 * @param {Response} res Response
 */
export function writeResponse(data: any, error: any, res: Response) {
  if (error) {
    res.status(error.code || config.HttpCodes.InternalServerError).json({
      error: true,
      message: error.message || error
    });
  } else {
    res.status(config.HttpCodes.OK).json({
      error: false,
      ...data
    });
  }
}
