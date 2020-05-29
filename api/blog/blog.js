const { writeResponse } = require('../../util');
const { getBySlug } = require('../../services/Blog');

/**
 * fetch blog by slug
 * @param {Object} req request Object
 * @param {Object} res response bject
 */
async function blog(req, res) {
  try {
    const blog = await getBySlug(req.params.slug);
    if(!blog) throw new Error('noSuchBlog');
    writeResponse({blog: blog}, null, res);
  } catch (e) {
    writeResponse(null, e, res);
  }
}

module.exports = blog;