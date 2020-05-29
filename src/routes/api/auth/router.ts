import { Router } from 'express';
import login from './login';
import loginToken from './loginToken';
import signup from './signup';

const router = Router();

router.post('/loginToken', loginToken);
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;