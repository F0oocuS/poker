const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: true
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: true
	},
	userName: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

module.exports = User;
