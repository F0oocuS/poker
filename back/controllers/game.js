const Game = require('../models/game');
const User = require('../models/user');

exports.getAllGame = (req, res, next) => {
	Game
		.findAll()
		.then(games => {
			if (!games) {
				const error = new Error('Games not found')
				error.statusCode = 401;

				throw error;
			}

			res.status(200).json({
				games
			})
		})
		.catch(error => {
			if (!error.statusCode) {
				error.statusCode = 500;
			}

			res.status(error.statusCode).json({
				error
			});
		});
};

exports.getSingleGame = (req, res, next) => {
	const gameId = req.param('id');

	Game
		.findById(gameId)
		.then(game => {
			if (!game) {
				const error = new Error('Game not found!');
				error.statusCode = 404;

				throw error;
			}

			res.status(200).json(game)
		})
		.catch(error => {
			if (!error.statusCode) {
				error.statusCode = 500;
			}

			res.status(error.statusCode).json({
				error
			});
		});
};

exports.addUserToGame = (req, res, next) => {
	const gameId = req.param('id');
	const userId = req.userId;

	Game
		.findById(gameId)
		.then(game => {
			User
				.findById(userId)
				.then(user => {
					game.setUsers([user]).then(() => {
						console.log('something!');
					});

				})
		})
		.catch(error => console.log(error));
};
