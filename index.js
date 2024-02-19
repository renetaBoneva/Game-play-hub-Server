const express = require('express');

const { port } = require('./constants.js');
const router = require('./routes.js');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});