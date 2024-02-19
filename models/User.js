const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [2, 'Username must be at least 2 characters long!']
    },
    email: {
        type: String,
        required: true,
        minLength: [5, 'Email must be at least 5 characters long!']
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;