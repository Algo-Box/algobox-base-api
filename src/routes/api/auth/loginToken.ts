import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { verifyToken } from '../../../services/JWT';
import { JWTUser } from '../../../types';
import { authenticate } from '../../../services/User';

/**
 * Attempts Login Using Token
 * @param {Request} req
 * @param {Response} res
 */
async function loginToken(req: Request, res: Response) {
  const token = req.headers.authorization;
  try {
    if(!token) throw new Error("No Token Provided");
    const { username, password }: JWTUser = await verifyToken(token);
    await authenticate(username, password);
    writeResponse({'verified': true}, null, res);
  } catch(e) {

  }
}

module.exports = loginToken;