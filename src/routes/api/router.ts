import { Router } from 'express';

const router = Router();

router.use('/auth', require('./auth/router'));
router.use('/blog', require('./blog/router'));

module.exports = router;