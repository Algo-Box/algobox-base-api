import { Request, Response } from 'express';
import { writeResponse } from '../../utils';
import { verifyToken } from '../../services/JWT';
import { JWTUser } from '../../types';

/**
 * Auth handler
 * @param {Request} req request
 * @param {Response} res response
 * @param {Function} next next
 * @returns {Promise<void>} return
 */
export async function auth(req: Request, res: Response, next: Function): Promise<void> {
  const token = req.headers.authorization;
  if (!token) {
    return writeResponse(null, { message: 'Private Route', code: 403 }, res);
  }
  try {
    const { username }: JWTUser = await verifyToken(token);
    req.body.username = username;
    return next();
  } catch (err) {
    return writeResponse(null, err, res);
  }
}
