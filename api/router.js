const router = require('express').Router();

router.use('/blog', require('./blog/router'));
router.use('/auth', require('./auth/router'));
router.use('/util', require('./util/router'));
router.use('/virtuals', require('./virtuals/router'));

module.exports = router;