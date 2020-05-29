import { UserSchema } from "../../db/models";
import { UserModel } from "../../types";
import { hash } from 'bcrypt';

/**
 * used to create a user
 * @param {UserModel} UserData The UserData 
 */
export async function createUser({
  username,
  password,
  name,
  email,
  codechef,
  codeforces
} : UserModel) {
  const getHash = await hash(password, 14);
  const user = new UserSchema({
    name: name,
    username: username,
    password: hash,
    codeforces: codeforces,
    codechef: codechef,
    email: email
  });
  return user.save();
}