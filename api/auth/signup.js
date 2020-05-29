const { writeResponse } = require('../../util');
const { createUser } = require('../../services/User'); 
const { createToken } = require('../../services/JWT');

/**
 * Signup users
 * @param {Object} req request Object
 * @param {Object} res response Object
 */
async function signup(req, res) {
  try {
    const user = await createUser(req.body);
    const userToken = await createToken({
      username: user.username,
    });
    writeResponse({userToken: userToken}, null, res);
  } catch (e) {
    writeResponse(null, e, res);    
  } 
}

module.exports = signup;