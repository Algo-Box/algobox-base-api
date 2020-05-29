const { BlogModel: Blog } = require('../../db');

/**
 * @returns {Promise} Proomise<any> resolve: List<Blog>, reject: Error
 */
async function getAll() {
  return Blog.find({});
}

/**
 * Returns blog searched by its slug
 * @param {String} slug slug of some blog
 */
async function getBySlug(slug) {
  return Blog.findOne({slug: slug});
}

module.exports = {
  getAll,
  getBySlug,
};