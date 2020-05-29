const { writeResponse } = require('../../util');
const { getAll } = require('../../services/Blog');

/**
 * Returns all available blogs
 * @param {Object} req request Object
 * @param {Object} res resonse Object
 */
async function home(req, res) {
  try {
    const result = await getAll();
    writeResponse(result, null, res);
  } catch (e) {
    writeResponse(null, e, res);
  }
}

module.exports = home;