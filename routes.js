const router = require('express').Router();

const authController = require('./controllers/authController');

router.get('/', (req, res) => {
    res.send('<h1>Server is running ...</h1>');
})

// on authentication
router.post('/register', authController.postRegister);
router.get('/login', authController.getLogin);
router.get('/logout', authController.getLogout);

// // on my profile page
// router.get('/user/:_userID');
// // on level up
// router.patch('/user/:_userID');

module.exports = router;