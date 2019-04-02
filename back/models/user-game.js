const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserGame = sequelize.define('game-user', {});

module.exports = UserGame;
