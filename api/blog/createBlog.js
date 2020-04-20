const { writeResponse } = require('../../util');
const { createBlog: createNewBlog } = require('../../services/Blog');

/**
 * Function used to create a blog
 * @param {Object} req Request Object
 * @param {Object} res Response Object
 */
async function createBlog (req, res) {
  try {
    const blog = await createNewBlog(req.body);
    writeResponse({blog: blog}, null, res); 
  } catch (e) {
    writeResponse(null, e, res);    
  }
}

module.exports = createBlog;