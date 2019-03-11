exports.signIn = (req, res, next) => {
	console.log('User sing in controller');
};

exports.signUp = (req, res, next) => {
	console.log('User sing up controller');
};

exports.test = (req, res, next) => {
	res.json({
		message: 'Hello world!'
	})
}
