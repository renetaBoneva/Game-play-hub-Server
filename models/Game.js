const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    maxLevel: {
        type: Number,
        required: [true, 'Name is required!'],
    },
    recordScore: {
        type: String,
        required: [true, 'Name is required!'],
    },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;