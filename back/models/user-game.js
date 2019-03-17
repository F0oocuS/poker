const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserGame = sequelize.define('user-game', {});

module.exports = UserGame;
