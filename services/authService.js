const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.findOneByEmail = (email) => User.findOne({ email });

exports.register = async ({ username, email, password, rePass }) => {
    if (password !== rePass) {
        throw new Error('Password missmatch!')
    }

    if (password.trim().length < 5) {
        throw new Error('Password must be at least 5 characters long!')
    }

    const isExisting = await this.findOneByEmail(email);

    if (!!isExisting) {
        throw new Error('User exists!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({ username, email, password: hashedPassword });

    return {
        _userID: result._userID
    };
}