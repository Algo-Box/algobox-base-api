const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'TEST',
  MongoURI: process.env.MongoURI,
  JWTsecret: process.env.JWTsecret,
};