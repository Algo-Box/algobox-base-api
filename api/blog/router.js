const router = require('express').Router();
const home = require('./home');
const createBlog = require('./createBlog');
const blog = require('./blog');
const edit = require('./edit');

router.get('/', home);
router.post('/create', createBlog);
router.get('/:slug', blog);
router.post('/edit/:slug', edit);

module.exports = router;