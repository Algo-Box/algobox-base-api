import { UserSchema } from "../../db/models";
import { UserModel } from "../../types";
import { hash } from 'bcrypt';
import { queryOne } from "../../db/functions";

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
  if(await queryOne(UserSchema, {username: username})) 
    throw new Error("User Already Exists");
  const getHash = await hash(password, 14);
  return new UserSchema({
    name: name,
    username: username,
    password: getHash,
    codeforces: codeforces,
    codechef: codechef,
    email: email
  }).save();
}