const { writeResponse } = require('../../util');
const { verifyToken } = require('../../services/JWT');
const { authenticate } = require('../../services/User');

/**
 * login user using token
 * @param {Object} req request object
 * @param {Object} res request object
 */
async function loginToken(req, res) {
  const token = req.headers.authorization;
  try {
    const { username, password } = await verifyToken(token);
    await authenticate(username, password);
    writeResponse({verified: true}, null, res);
  } catch (e) {
    console.log(e);
    writeResponse(null, e, res);
  } 
}

module.exports = loginToken;
