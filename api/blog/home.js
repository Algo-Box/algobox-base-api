const Blog = require('../../db/models/Blog');
const { writeResponse, invoker } = require('../../util/util');

const home = async (req, res) => {
  const [blogs, err] = await invoker(Blog.find({}));
  if(err) return writeResponse(null, err, res);
  writeResponse({
    blogs: blogs,
  }, null, res);
}

module.exports = home;