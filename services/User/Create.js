const { UserModel: User } = require('../../db');
const { getHash } = require('../../util');

/**
 * User Object
 * @param {Object} param0 Object contning user info
 * @returns {Promise} User.save() Promise
 */
async function createUser({ 
  username, 
  password, 
  email, 
  name, 
  codeforces, 
  codechef 
}) {
  const hash = await getHash(password);
  const user = new User ({
    name: name,
    codeforces: codeforces,
    codechef: codechef,
    email: email,
    username: username,
    password: hash,     
  });
  return user.save();
}

module.exports = {
  createUser,
};