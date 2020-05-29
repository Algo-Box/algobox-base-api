import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { getAll } from '../../../services/Blog/Query';

export default async function home(req: Request, res: Response) {
  try {
    writeResponse(await getAll(), null, res);
  } catch (e) {
    writeResponse(null, e, res);
  }
} 