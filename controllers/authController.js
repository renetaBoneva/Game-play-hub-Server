const authService = require('../services/authService');

// exports.getRegister = async (req, res) => {
//     res.render('auth/register');
// }

exports.getLogin = async (req, res) => {
    res.render('auth/login');
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbGZAYWJ2LmJnIiwidXNlcm5hbWUiOiJqYWtjaG8iLCJpYXQiOjE3MDg1MzA1ODd9.D4EmkhOPYGpNOWjgcMJQBRet_oQv6Nj6ihFDgxFH7Og

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
        const result = await authService.login(email, password);
        console.log(result);
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

exports.deleteProfile = async (req, res) => {
    const { _userID } = req.params;

    try {
        const user = await authService.findByIdAndDelete(_userID).lean();

        return res.json(user);
    } catch (err) {
        res.send(`Error: ${err.message}`);
    }
}