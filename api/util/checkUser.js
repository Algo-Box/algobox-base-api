const { queryOneUser } = require('../../services/User');
const { writeResponse } = require('../../util');

/**
 * function to check if user with same username exists
 * @param {Object} req request Object
 * @param {Object} res response Object
 */
async function checkUser(req, res) {
  try {
    const username = req.params.username;
    const user = await queryOneUser(username);
    if(user) throw new Error('userExists');
    writeResponse(null, null, res);
  } catch (e) {  
    writeResponse(null, e, res);  
  }
}

module.exports = checkUser;