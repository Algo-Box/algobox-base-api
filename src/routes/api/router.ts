import { Router } from 'express';

// eslint-disable-next-line new-cap
const router = Router();

router.use('/auth', require('./auth/router'));
router.use('/blog', require('./blog/router'));

module.exports = router;
