const router = require('express').Router();
const { isLoggedIn } = require('../../middleware/auth');

router.use(isLoggedIn);
router.get('/', require('./getVirtual'));

module.exports = router;