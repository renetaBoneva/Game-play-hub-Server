const express = require('express');
const mongoose = require('mongoose');

const { port, dbConnectionString } = require('./constants.js');
const router = require('./routes.js');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(router);


// mongoose.set('strictQuery', false)
mongoose.connect(dbConnectionString)
    .then(() => {
        console.log('Database connected!');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        });
    })
    .catch((err) => console.log(err));