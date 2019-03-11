const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/signin', userController.signIn);

router.post('/signup', userController.signUp);

// this will deleted later
router.get('/', userController.test);

module.exports = router;
