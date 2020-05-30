import { Router } from 'express';
import home from './home';

// eslint-disable-next-line new-cap
const router = Router();

router.get('/', home);

module.exports = router;
