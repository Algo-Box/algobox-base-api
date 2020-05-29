import { Router } from 'express';

const router = Router();

router.post('/loginToken', require('./loginToken'));
router.post('/login', require('./login'));
router.post('/signup', require('./signup'));

module.exports = router;