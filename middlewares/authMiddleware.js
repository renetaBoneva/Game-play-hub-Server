const { SECRET } = require('../config');
const jwt = require('../lib/jsonwebtoken');
const config = require('../config/index');

exports.isAuth = async (req, res, next) => {
    const accessToken = req.headers["x-authorization"];

    if (accessToken) {
        try {
            const verifiedToken = await jwt.verify(accessToken, SECRET);
            req.verifiedToken = verifiedToken;
        } catch (err) {
            return res.status(401).json({ "Error": err.message });
        }
    } else {
        return res.status(401).json({ "Error": "Unauthorized!" });
    }

    next();
}

exports.isOwner = async (req, res, next) => {
    const { _userID } = req.params;
    const accessToken = req.headers["x-authorization"];

    if (accessToken) {
        try {
            const verifiedToken = await jwt.verify(accessToken, SECRET);
            if (_userID != verifiedToken._userID) {
                throw new Error("Unauthorized!");
            };
        } catch (err) {
            return res.status(401).json({ "Error": err.message });
        }
    } else {
        return res.status(401).json({ "Error": "Unauthorized!" });
    }

    next();
}

exports.isAdmin = (req, res, next) => {
    const reqToken = req.headers['x-admin'];

    if (reqToken !== config.adminAccessToken) {
        return res.status(401).json({ "Error": "Unauthorized!" });
    }
    next();
}