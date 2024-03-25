const { OpenAI } = require('openai');

const config = require('../config');

exports.AIresponse = async (req, res) => {
    const OPEN_AI_KEY = config.OPEN_AI_KEY;
    const openai = new OpenAI({ apiKey: OPEN_AI_KEY });
    const aiModel = 'gpt-3.5-turbo-0125';
    const board = req.body.board;
    const boardJSON = JSON.stringify({ board });

    if (board && board.length === 3) {
        const prompt = [];
        prompt.push('You are an expert tic tac toe player.');
        prompt.push('You play as O. You have to make just one mark in an empty place. Focus on winning. Play extremely well.');
        prompt.push('For the json content i provide as input, please give me json output in this format:');
        prompt.push('{board:[[],[],[]]}');

        const messages = [
            {
                role: 'system',
                content: prompt.join(' ')
            },
            {
                role: 'user',
                content: boardJSON
            }
        ];

        const completion = await openai.chat.completions.create({
            model: aiModel,
            messages,
            response_format: { 'type': 'json_object' }
        })

        const aiResponse = completion.choices[0].message.content;
       return res.status(200).json({ aiResponse });
    }
    res.status(400).json({ "Error": "Incorrect input data!" });
}