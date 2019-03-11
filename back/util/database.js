const Sequelize = require('sequelize');

const sequelize = new Sequelize('app-poker', 'root', 'rootroot', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = sequelize;
