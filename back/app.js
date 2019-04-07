const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

// Import all models
const UserModel = require('./models/user');
const GameModel = require('./models/game');
const GameUserModel = require('./models/game-user');

// Import all routes
const userRouter = require('./routes/user');
const gameRouter = require('./routes/game');

const app = express();

app.use(bodyParser.json());
app.use(expressValidator());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.use('', userRouter);
app.use('/game', gameRouter);

UserModel.belongsToMany(GameModel, { through: GameUserModel });
GameModel.belongsToMany(UserModel, { through: GameUserModel });

sequelize
	.sync()
	.then(() => {
		const server = app.listen(3000);
		const io = require('./socket').init(server);

		io.on('connection', socket => {
			console.log('user was connect');
			socket.on('new-message', message => {
				console.log(message);

				io.emit('new-message', message);
			});
		});
	})
	.catch(error => console.log(error));
