const authService = require('../services/authService');

exports.postRegister = async (req, res) => {
    const { username, email, password, rePass } = req.body;

    try {
        const result = await authService.register({ username, email, password, rePass });

        res.json(result);
    } catch (err) {
        res.status(401).json({ "Error": `${err.message}` });
    }

};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authService.login(email, password);
        res.json(result);
    } catch (err) {
        res.status(401).json({ "Error": `${err.message}` });
    }
};

exports.getLogout = async (req, res) => {
    res.json({});
};

exports.getProfile = async (req, res) => {
    const { _userID } = req.params;

    try {
        const user = await authService.findById(_userID).lean();

        if (user) {
            const { password, ...result } = user;

            return res.json(result);
        }

        throw new Error('User not found!');
    } catch (err) {
        res.status(404).json({ "Error": `${err.message}` });
    }
}

exports.deleteProfile = async (req, res) => {
    const { _userID } = req.params;

    try {
        const user = await authService.findByIdAndDelete(_userID).lean();

        return res.json(user);
    } catch (err) {
        res.json({ "Error": `${err.message}` });
    }
}

exports.isValidAccessToken = async (req, res) => {
    const accessToken = req.headers["x-authorization"];
    res.status(200).json({ accessToken });
}