const dbCredentials = {
    'username': encodeURIComponent('gamePlayHubAdmin'),
    'password': encodeURIComponent('sBK4ilSIT4zrA7FL')
};

exports.dbConnectionString = `mongodb+srv://${dbCredentials.username}:${dbCredentials.password}@gameplayhub.jkjdleh.mongodb.net/?retryWrites=true&w=majority`;

exports.port = 3333;