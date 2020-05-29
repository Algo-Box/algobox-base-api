import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { createUser } from '../../../services/User';
import { createToken } from '../../../services/JWT';
import { UserModel } from '../../../types';

export default async function signup(req: Request, res: Response) {
  try {
    const doc = await createUser(req.body);
    const user: UserModel = doc.toObject();
    const userToken = await createToken({
      username: user.username,
    });
    writeResponse({userToken: userToken}, null, res);
  } catch (e) {
    writeResponse(null, e, res);
  }
}