const router = require('express').Router();

router.use('/blog', require('./blog/router'));

module.exports = router;