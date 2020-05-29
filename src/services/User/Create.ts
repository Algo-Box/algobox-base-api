import { UserSchema } from "../../db/models";
import { UserModel } from "../../types";
import { hash } from 'bcrypt';
import { queryOne } from "./Query";

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
  if(await queryOne('username', username)) throw new Error("User Already Exists");
  const getHash = await hash(password, 14);
  const user = new UserSchema({
    name: name,
    username: username,
    password: getHash,
    codeforces: codeforces,
    codechef: codechef,
    email: email
  });
  return user.save();
}