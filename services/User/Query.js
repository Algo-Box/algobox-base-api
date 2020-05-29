const { UserModel: User } = require('../../db');
const { compareHash } = require('../../util');

/**
 * Used to get a User object by username
 * @param {String} username Username
 * @returns {Promise} User.find Promise
 */
async function queryOneUser(username) {
  return User.findOne({username: username});
}

/**
 * Used to authenticate a user
 * @param {String} username 
 * @param {String} password
 * @returns {Promise} onResolve: user, onReject: error  
 */
async function authenticate(username, password) {
  let resol, err;
  try {
    const user = await queryOneUser(username);
    if(compareHash(password, user.password)) {
      resol = user;
    } else {
      throw new Error('passwordMismatch');
    }
  } catch (e) {
    err = e;
  }
  return new Promise((resolve, reject) => {
    if(err) reject(err);
    else resolve(resol);
  });
}


module.exports = {
  queryOneUser,
  authenticate,
};