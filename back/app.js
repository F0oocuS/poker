const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

// Import all models
const UserModel = require('./models/user');
const AccountModel = require('./models/account');

// Import all routes
const userRouter = require('./routes/user');

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

UserModel.hasOne(AccountModel);
AccountModel.belongsTo(UserModel);

sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch(error => console.log(error));
