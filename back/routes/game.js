const express = require('express');

const gameController = require('../controllers/game');

const isAuth = require('../middleware/isAuth');

const router = express.Router();

router.get('', gameController.getAllGame);

// router.get('', isAuth, gameController.addUserToGame);

module.exports = router;
