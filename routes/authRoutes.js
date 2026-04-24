const router = require("express").Router();
const { signup, login } = require('../controllers/authController');
const { validateSignup, validateLogin } = require('../middleware/inputvalidation');

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

module.exports = router;