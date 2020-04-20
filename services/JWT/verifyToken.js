const jwt = require('jsonwebtoken');
const { JWTsecret } = require('../../util');
/**
 * function to decode token
 * @param {string} token JWT Token
 * @returns {Promise} jwt.verify Promise
 */
async function verifyToken(token) {
  return jwt.verify(token, JWTsecret, {algorithms: 'HS512'});
}

module.exports = verifyToken;