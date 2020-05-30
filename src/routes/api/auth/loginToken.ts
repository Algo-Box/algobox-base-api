import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { verifyToken } from '../../../services/JWT';
import { JWTUser } from '../../../types';
import { queryOne } from '../../../db/functions';
import { UserSchema } from '../../../db/models';

/**
 * Attempts Login Using Token
 * @param {Request} req request
 * @param {Response} res response
 */
export default async function loginToken(req: Request, res: Response) {
  const token = req.headers.authorization;
  try {
    if (!token) {
      throw new Error('No Token Provided');
    }
    const { username }: JWTUser = await verifyToken(token);
    if (!await queryOne(UserSchema, { username: username })) {
      throw new Error('Invalid Token');
    }
    writeResponse({ verified: true }, null, res);
  } catch (err) {
    writeResponse(null, err, res);
  }
}
