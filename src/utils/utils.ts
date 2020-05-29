import { Response } from 'express';

export function writeResponse(data: any, error: any, res: Response) {
  if(error) {
    res.status(error.code || 500).json({
      'error': true,
      'message': error.message || error
    });
  } else {
    res.status(200).json({
      'error': false,
      ...data
    });
  }
}