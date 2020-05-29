import { Router, Request, Response } from 'express';
import { Error } from './404';

const router = Router();

router.get("/", (req: Request, res: Response) => res.send("Hello World"));

router.get('*', Error);

module.exports = router;