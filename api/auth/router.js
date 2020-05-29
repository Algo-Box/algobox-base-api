const router = require('express').Router();
const loginToken = require('./loginToken');
const signup = require('./signup');
const login = require('./login');

router.post('/loginToken', loginToken);
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;