const express = require('express');

const userController = require('../controllers/user');

const isValid = require('../middleware/isValid');

const router = express.Router();

router.post('/signup', userController.validator('signUp'), isValid, userController.signUp);

router.post('/signin', userController.validator('signIn'), isValid, userController.signIn);

module.exports = router;
