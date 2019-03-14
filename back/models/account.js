const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Account = sequelize.define('account', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
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
	},
	birthday: {
		type: Sequelize.DATEONLY,
		allowNull: true
	},
	sex: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

module.exports = Account;
