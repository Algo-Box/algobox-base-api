const Blog = require('../../db/models/Blog');
const { writeResponse, invoker } = require('../../util/util');

const blog = async (req, res) => {
  const [blog, err] = await invoker(Blog.find({slug: req.params.slug}));
  if(err) return writeResponse(null, err, res);
  if(blog.length === 0) return writeResponse(null, 'noSuchBlog', res);
  writeResponse({
    blog: blog,
  }, null, res);
}

module.exports = blog;