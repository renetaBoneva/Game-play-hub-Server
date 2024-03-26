const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    coverImgPath: {
        type: String,
        required: [true, 'Cover image path is required!'],
    },
    link: {
        type: String,
        required: [true, 'Link is required!'],
    },
    maxLevel: {
        type: Number,
        min: 1
    },
    bestScores: {
        type: String,
        min: 1,
    },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;