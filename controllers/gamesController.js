const { getAll, createOneGame } = require("../services/gamesService");

exports.getGames = async (req, res) => {
    try {
        const games = await getAll();

        return res.status(200).json(games);
    } catch (err) {
        return res.status(400).json({ 'Error': err.message });
    }
}

exports.postGames = async (req, res) => {
    const game = req.body;

    try {
        if (game) {
            const { name, coverImgPath, link, maxLevel, bestScores } = game;
            let gameToCreate = { name, coverImgPath, link };

            if (maxLevel) {
                gameToCreate[maxLevel] = maxLevel;
            }

            if (bestScores) {
                gameToCreate[bestScores] = bestScores;
            }

            await createOneGame(gameToCreate);

            return res.status(200).json(game);
        }

        res.status(400).json({ 'Error': 'Incorrect input data!' });
    } catch (err) {
        return res.status(400).json({ 'Error': err.message });
    }
}