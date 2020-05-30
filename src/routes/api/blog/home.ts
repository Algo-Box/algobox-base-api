import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { getAll } from '../../../services/Blog/Query';

/**
 * home handler
 * @param {Request} req request
 * @param {Response} res resonse
 */
export default async function home(req: Request, res: Response) {
  try {
    writeResponse(await getAll(), null, res);
  } catch (err) {
    writeResponse(null, err, res);
  }
}
