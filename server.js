// express web sever main js file
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// points variable to path of db connection information 
const mongodb = require('./db/connection');

// attempts to pull port or default to 8080
const port = process.env.port || 8080;

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-control-Allow-Headers',
            'Orignin, X-Requested-With, Content-Type, Accept, Z-Key'
        );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS')
        next();
    })
    .use('/', require('./routes'));

// Use your routes already above redundant code
//app.use('/', require('./routes'));


// Attempts to connect to database throws error or success message
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});