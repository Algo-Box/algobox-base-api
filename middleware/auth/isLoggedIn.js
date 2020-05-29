const { verifyToken } = require('../../services/JWT');
const { writeResponse } = require('../../util');

/**
 * Checks if a user is logged in
 * @param {Object} req request Object
 * @param {Object} res response Object
 * @param {function} next function to call next;
 */
async function isLoggedIn(req, res, next) {
  try {
    const token = req.headers.authorization;
    if(!token) throw new Error('invalidToken');
    const decoded = await verifyToken(token);
    console.log(decoded);
    req.user = decoded.username;
    next();
  } catch (e) {
    writeResponse(null, e, res);
  } 
}

module.exports = {
  isLoggedIn,
};