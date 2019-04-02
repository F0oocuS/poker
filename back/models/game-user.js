const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const GameUser = sequelize.define('game-user', {});

module.exports = GameUser;
