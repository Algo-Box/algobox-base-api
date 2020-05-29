import { Request, Response } from 'express';
import { JWTUser } from '../../../types';
import { authenticate } from '../../../services/User';
import { createToken } from '../../../services/JWT';
import { writeResponse } from '../../../utils';

export async function login(req: Request, res: Response) {
  const { username, password }: JWTUser = req.body;
  try {
    const user: JWTUser | undefined = await authenticate(username, password);
    if(user === undefined) throw new Error("User Not Found");
    const token = await createToken({
      username: user.username, 
    });
    writeResponse({userToken: token}, null, res);
  } catch (e) {
    writeResponse(null, e, res);
  }
}