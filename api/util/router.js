const router = require('express').Router();

router.get('/username/:username', require('./checkUser'));
router.get('/blog/:slug', require('./checkSlug'));

module.exports = router;