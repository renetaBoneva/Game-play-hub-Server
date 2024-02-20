const router = require('express').Router();

const authController = require('./controllers/authController');

router.get('/', (req, res) => {
    res.send('<h1>Server is running ...</h1>');
})

// on authentication
// router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.post('/login', authController.postLogin);
router.get('/logout', authController.getLogout);

// // on my profile page
router.get('/users/:_userID', authController.getProfile);
// // on level up
// router.patch('/users/:_userID');

module.exports = router;