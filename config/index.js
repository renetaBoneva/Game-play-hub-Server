const dotenv = require('dotenv');
dotenv.config();

const dbCredentials = {
    'username': encodeURIComponent('gamePlayHubAdmin'),
    'password': encodeURIComponent('sBK4ilSIT4zrA7FL')
};

const config = {
    'dbConnectionString': process.env['dbConnectionString'] || `mongodb+srv://${dbCredentials.username}:${dbCredentials.password}@gameplayhub.jkjdleh.mongodb.net/?retryWrites=true&w=majority`,
    'port': process.env['port'] || 3333,
    'SECRET': process.env['SECRET'] || '2a2e13724ac9764654700bee56f4185c181ebe61',
    'OPEN_AI_KEY': process.env['OPEN_AI_KEY'] || null,
}

module.exports = config;

