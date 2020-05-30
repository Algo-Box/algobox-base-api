import { UserSchema } from '../../db/models';
import { compare } from 'bcrypt';
import { UserModel } from '../../types';
import { queryOne } from '../../db/functions';

/**
 * Authenticates a user
 * @param {string} username The Username
 * @param {string} password The Password
 */
export async function authenticate(
  username: string,
  password: string
) : Promise<UserModel | undefined> {
  const value = await queryOne(UserSchema, { username: username });
  if (value === null) {
    throw new Error('User Not Found');
  }
  const user: UserModel = value.toObject();
  if (await compare(password, user.password)) {
    return user;
  }
  throw new Error('Password Mismatch');
}
