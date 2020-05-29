export interface JWTUser {
  username: string,
  password: string
};

export interface UserModel {
  name: string,
  email: string,
  username: string,
  password: string,
  codeforces: string,
  codechef: string,
};

export interface BlogModel {
  title: string,
  slug: string,
  author: string,
  tags: Array<string>,
  Body: string
}