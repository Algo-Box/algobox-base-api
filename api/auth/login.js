const { writeResponse } = require('../../util');
const { createToken } = require('../../services/JWT');
const { authenticate } = require('../../services/User');

/**
 * logging in a user
 * @param {Object} req request object
 * @param {Object} res response object
 */
async function login(req, res) {
  const { username, password, remember } = req.body;
  try {
    const user = await authenticate(username, password);
    const token = await createToken({
      username: user.username,
    }, remember);
    writeResponse({userToken: token}, null, res);
  } catch(e) {
    writeResponse(null, e, res);
  }
}

module.exports = login;