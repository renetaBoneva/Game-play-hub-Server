const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const handlebars = require('express-handlebars');

const { port, dbConnectionString } = require('./constants.js');
const router = require('./routes.js');

const app = express();

// for testing purposes:
// ------
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use('/static', express.static('public'))
// ---------

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

mongoose.connect(dbConnectionString)
    .then(() => {
        console.log('Database connected!');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        });
    })
    .catch((err) => console.log(err));