const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');
const User = require('../models/User');

exports.findOneByEmail = (email) => User.findOne({ email });
exports.findById = (_userID) => User.findById(_userID);

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

    try {
        await User.create({ username, email, password: hashedPassword, levels: {} });

        const payload = await this.login(email, password);

        return payload;
    } catch (err) {
        return err;
    }
}

exports.login = async (email, password) => {
    const user = await this.findOneByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isValidPass = await bcrypt.compare(password, user.password);

    if (!isValidPass) {
        throw new Error('Invalid email or password!');
    }

    const payload = {
        _userID: user._userID,
        email,
        username: user.username
    }

    const accessToken = await jwt.sign(payload, SECRET);

    return {
        ...payload,
        accessToken
    };

}