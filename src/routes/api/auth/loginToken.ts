import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { verifyToken } from '../../../services/JWT';
import { JWTUser } from '../../../types';
import { queryOne } from '../../../services/User';

/**
 * Attempts Login Using Token
 * @param {Request} req
 * @param {Response} res
 */
export async function loginToken(req: Request, res: Response) {
  const token = req.headers.authorization;
  try {
    if(!token) throw new Error("No Token Provided");
    const { username }: JWTUser = await verifyToken(token);
    if(!await queryOne('username', username)) throw new Error("Invali Token");
    writeResponse({'verified': true}, null, res);
  } catch(e) {
    writeResponse(null, e, res);
  }
}