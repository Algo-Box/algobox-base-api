import { Router } from 'express';
import home from './home';

const router = Router();

router.get('/', home);

module.exports = router;
