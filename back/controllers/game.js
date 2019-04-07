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
			if (!game) {
				const error = new Error('Game not found');
				error.statusCode = 404;

				throw error;
			}

			User
				.findById(userId)
				.then(user => {
					if (!user) {
						const error = new Error('User not found');
						error.statusCode = 404;

						throw error;
					}

					game.setUsers([user]).then(() => {
						console.log(`User with ID ${userId} was added to game with ID ${gameId}`);

						res.status(200).json({
							message: `User with ID ${userId} was added to game with ID ${gameId}`
						})
					});

				})
		})
		.catch(error => console.log(error));
};

exports.removeUserFromGame = (req, res, next) => {
	const gameId = req.param('id');
	const userId = req.userId;

	Game
		.findById(gameId)
		.then(game => {
			if (!game) {
				const error = new Error('Game not found');
				error.statusCode = 404;

				throw error;
			}

			User
				.findById(userId)
				.then(user => {
					if (!user) {
						const error = new Error('User was not found');
						error.statusCode = 404;

						throw error;
					}

					game
						.removeUser([user])
						.then(user => {
							console.log(`User with ID ${userId} was removed from game with ID ${gameId}`);

							res.status(200).json({
								message: `User with ID ${userId} was removed from game with ID ${gameId}`
							})
						})
				})
		})
		.catch(error => {
			if (!error.statusCode) {
				error.statusCode = 500;
			}

			res.status(error.statusCode).json(error);
		});
};
