const { writeResponse } = require('../../util');

/**
 * get list of virtual contests
 * @param {Object} req request Object
 * @param {Object} res response Object
 */
function getVirtual(req, res) {
  // TODO
  console.log(req.user);
  writeResponse(null, null, res);
}

module.exports = getVirtual;