import { UserSchema } from "../../db/models";
import { compare } from 'bcrypt';
import { UserModel } from "../../types";

/**
 * gets One Document from DB
 * @param {string} param the parameter
 * @param {string} query the query
 */
export async function queryOne(param: string, query: string) {
  return UserSchema.findOne({ [ param ]: query });
}

/**
 * Authenticates a user
 * @param {string} username The Username
 * @param {string} password The Password
 */
export async function authenticate(username: string, password: string): Promise<UserModel | undefined>  {
  try {
    const value = await queryOne('username', username);
    if(value === null) throw new Error("User Not Found");
    const user: UserModel = value.toObject();
    if(await compare(password, user.password)) return user;
    else throw new Error("Password Mismatch");
  } catch (e) {
    throw e;
  }
} 