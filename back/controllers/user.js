const User = require('../models/user');
const { body } = require('express-validator/check');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signUp = (req, res, next) => {
	const { email, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 8);

	User
		.create({
			email,
			password: hashedPassword
		})
		.then(user => {
			if (!user) {
				const error = new Error('Something wrong!');

				error.statusCode = 401;
				throw error;
			}

			user.createAccount();

			const token = jwt.sign({ id: user.id },	'secret-key', { expiresIn: '1w' });

			res.status(200).json({
				user,
				token
			});
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

exports.signIn = (req, res, next) => {
	const { email, password } = req.body;
	let loadedUser;

	User
		.find({ where: { email: email } })
		.then(user => {
			if (!user) {
				const error = new Error('User with this email is not be found');

				error.statusCode = 401;
				throw error;
			}

			loadedUser = user;

			return bcrypt.compare(password, user.password);
		})
		.then(isEqual => {
			if (!isEqual) {
				const error = new Error('Wrong password');

				error.statusCode = 401;
				throw error;
			}

			const token = jwt.sign({ id: loadedUser.id }, 'secret-key', { expiresIn: '1w' });

			res.status(200).json({
				userId: loadedUser.id,
				token
			});
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

exports.validator = methods => {
	switch (methods) {
		case 'signUp': {
			return [
				body('email', 'Invalid email address').isEmail(),
				body('password', 'Invalid password').isLength({ min: 4 })
			]
		}
		case 'signIn': {
			return [
				body('email', 'Invalid email address').isEmail(),
				body('password', 'Invalid password').isLength({ min: 4 })
			]
		}
		default:
			return console.log('Wrong case value in router');
	}
};
