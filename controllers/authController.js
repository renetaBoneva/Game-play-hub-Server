const authService = require('../services/authService');

exports.postRegister = async (req, res) => {
    const { username, email, password, rePass } = req.body;

    console.log('register -> ', req.body);

    try {
        const result = await authService.register({ username, email, password, rePass });
        
        res.redirect('/');
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