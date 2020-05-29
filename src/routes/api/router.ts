import { Router } from 'express';

const router = Router();

router.use('/auth', require('./auth/router'));

module.exports = router;