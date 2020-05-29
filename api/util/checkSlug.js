const { writeResponse } = require('../../util');
const { getBySlug } = require('../../services/Blog');

/**
 * function to check if blog with slug already exists
 * @param {Object} req request object
 * @param {Object} res response object
 */
async function checkSlug(req, res) {
  const slug = req.params.slug;
  try {
    const blog = await getBySlug(slug);
    if(blog) throw new Error('slugExists');
    writeResponse({}, null, res);
  } catch (e) {
    writeResponse(null, e, res);
  }
}

module.exports = checkSlug;