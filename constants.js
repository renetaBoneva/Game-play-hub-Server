const dbCredentials = {
    'username': encodeURIComponent('gamePlayHubAdmin'),
    'password': encodeURIComponent('sBK4ilSIT4zrA7FL')
};

exports.dbConnectionString = `mongodb+srv://${dbCredentials.username}:${dbCredentials.password}@gameplayhub.jkjdleh.mongodb.net/?retryWrites=true&w=majority`;
exports.port = 3333;
exports.SECRET = '2a2e13724ac9764654700bee56f4185c181ebe61';
exports.OPEN_AI_KEY = '4fe7805fe9504a9e04b7b714baaf77e24356ad7474be9448db0c5207849e8000';