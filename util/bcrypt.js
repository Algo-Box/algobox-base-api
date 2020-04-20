const bcrypt = require('bcrypt');
const L = 14;

/**
 * Hashes a given string
 * @param {String} password The password
 * @returns {Promise} bcrypt.hash Promise
 */
async function getHash(password) {
  return bcrypt.hash(password, L);
}

/**
 * Function to compares passwords
 * @param {String} password Password
 * @param {String} hash Hash String
 * @returns {Promise} bcrypt.compare Promise
 */
async function compareHash(password, hash) {
  return bcrypt.compare(password, hash); 
}

module.exports = {
  getHash,
  compareHash,
};