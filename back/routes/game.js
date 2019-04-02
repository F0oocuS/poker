const express = require('express');

const gameController = require('../controllers/game');

const isAuth = require('../middleware/isAuth');

const router = express.Router();

router.get('', gameController.getAllGame);

router.get('/:id', gameController.getSingleGame);

router.get('/:id/connect', isAuth, gameController.addUserToGame);

module.exports = router;
