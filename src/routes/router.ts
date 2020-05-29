import { Router } from 'express';
import { Error } from './404';

const router = Router();

router.use('/api', require('./api/router'));

router.get('*', Error());

module.exports = router;