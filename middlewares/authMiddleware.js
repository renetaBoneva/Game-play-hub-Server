const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.isAuth = async (req, res, next) => {
    const accessToken = req.headers["x-authorization"];

    if (accessToken) {
        try {
            await jwt.verify(accessToken, SECRET);
        } catch (err) {
            return res.status(404).json({ "Error": err.message });
        }
    } else {
        return res.status(404).json({ "Error": "Unauthorized!" });
    }

    next();
}