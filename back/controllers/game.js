const User = require('../models/user');
const Game = require('../models/game');

exports.addUserToGame = (req, res, next) => {
	const userId = req.userId;

	User
		.findById(userId)
		.then(user => {
			Game.createUserGame(user.id);
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
