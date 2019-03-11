const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

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

sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch(error => console.log(error));
