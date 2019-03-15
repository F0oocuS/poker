const express = require('express');

const userController = require('../controllers/user');

const isValid = require('../middleware/isValid');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

router.post('/signup', userController.validator('signUp'), /*isValid, */userController.signUp);

router.post('/signin', userController.validator('signIn'), /*isValid,*/ userController.signIn);

router.get('/user', isAuth, userController.getUser);

module.exports = router;
