const router = require('express').Router();

const authController = require('./controllers/authController');
const gamesController = require('./controllers/gamesController');
const ticTacToeController = require('./controllers/ticTacToeController');
const { isAuth, isOwner, isAdmin } = require('./middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.send('<h1>Server is running ...</h1>');
})

// on authentication
router.post('/register', authController.postRegister);
router.post('/login', authController.postLogin);
router.get('/logout', isAuth, authController.getLogout);
router.post('/token/isValid', isAuth, authController.isValidAccessToken);

// // on my profile page
router.get('/users/:_userID', isOwner, authController.getProfile);
router.delete('/users/:_userID', isOwner, authController.deleteProfile);
// // on level up
// router.patch('/users/:_userID');

// games
router.get('/games', gamesController.getGames);
router.post('/games', isAdmin, gamesController.postGames);
router.post('/games/ticTacToe/AIresponse', ticTacToeController.AIresponse);

module.exports = router;