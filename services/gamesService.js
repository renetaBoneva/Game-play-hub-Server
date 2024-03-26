const Game = require('../models/Game');

exports.getAll = () => Game.find({});
exports.createOneGame = (game) => Game.create(game);