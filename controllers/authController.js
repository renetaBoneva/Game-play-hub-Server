const authService = require('../services/authService');

// exports.getRegister = async (req, res) => {
//     res.render('auth/register');
// }

exports.postRegister = async (req, res) => {
    const { username, email, password, rePass } = req.body;

    try {
        const result = await authService.register({ username, email, password, rePass });

        res.json(result);
    } catch (err) {
        res.status(401).send(`Error: ${err.message}`);
    }

};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authService.login( email, password );

        res.json(result);
    } catch (err) {
        res.status(401).send(`Error: ${err.message}`);
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
        res.status(404).send(`Error: ${err.message}`);
    }
}