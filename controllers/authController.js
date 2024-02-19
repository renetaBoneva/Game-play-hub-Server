const { restart } = require('nodemon');
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

exports.getLogin = async (req, res) => {
    res.send('ok');
};

exports.getLogout = async (req, res) => {
    res.send('ok');
};