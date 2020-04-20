const jwt = require('jsonwebtoken');
const { JWTsecret } = require('../../util');

/**
 * Function to create a JWT token
 * @param {Object} payload Payload is an object
 * @param {remember} remember Boolean value for time to expiration
 * @return {Promise} jwt.sign Promise 
 */
async function createToken(payload, remember = false) {
  return jwt.sign(payload, JWTsecret, {algorithm: 'HS512', expiresIn: remember ? '7d' : '3h'});
}

module.exports = createToken;