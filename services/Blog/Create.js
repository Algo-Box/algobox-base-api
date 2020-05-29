const { BlogModel: Blog } = require('../../db');

/**
 * function to create blog
 * @param {Object} param0 Object contaning required parameters
 * @returns {Promise} Promise -> resolve: new Blog, reject: err
 */
async function createBlog({ author, tags, body, title, slug }) {
  tags = tags.split(',');
  const newBlog = new Blog({
    author: author,
    tags: tags,
    TextBody: body,
    title: title,
    slug: slug,
  });
  return newBlog.save();
}

module.exports = {
  createBlog,
};