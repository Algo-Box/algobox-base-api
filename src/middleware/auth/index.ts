import { Request, Response } from 'express';
import { writeResponse } from '../../utils';
import { verifyToken } from '../../services/JWT';
import { JWTUser } from '../../types';

export async function auth(req: Request, res: Response, next: Function) {
  const token = req.headers.authorization;
  if(!token) 
    return writeResponse(null, { message: "Private Route", code: 403 }, res);
  try {
    const { username }: JWTUser = await verifyToken(token);
    req.body.username = username;
    next();
  } catch (e) {
    return writeResponse(null, e, res);
  }
}