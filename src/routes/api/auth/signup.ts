import { Request, Response } from 'express';
import { writeResponse } from '../../../utils';
import { createUser } from '../../../services/User';
import { createToken } from '../../../services/JWT';
import { UserModel } from '../../../types';

/**
 * signup handler
 * @param {Request} req request
 * @param {Response} res resonse
 */
export default async function signup(req: Request, res: Response) {
  try {
    const doc = await createUser(req.body);
    const user: UserModel = doc.toObject();
    const userToken = await createToken({
      username: user.username,
    });
    writeResponse({ userToken: userToken }, null, res);
  } catch (err) {
    writeResponse(null, err, res);
  }
}
