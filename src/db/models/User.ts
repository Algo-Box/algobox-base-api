import { Schema, model } from "mongoose";

const UserSchemaDef = new Schema({
  name: {
    type: String,
    required: false,
    default: 'null'
  },
  email: {
    type: String,
    required: false,
    default: 'null'
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  codeforces: {
    type: String,
    required: false,
    default: 'null'
  },
  codechef: {
    type: String,
    required: false,
    default: 'null'
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

export const UserSchema = model('User', UserSchemaDef);