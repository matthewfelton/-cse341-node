// express web sever main js file
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// points variable to path of db connection information 
const mongodb = require('./db/connection');

// attempts to pull port or default to 3000
const port = process.env.port || 3000;

// directs paths to routes index
app.use('/', require('./routes'));

//app
//    .use(bodyParser.json())
//    .use((req, res, next) => {
//        res.setHeader('Access-Control-Allow-Origin', '*');
//        next();
//    })
//   .use('/', require('./routes'));

app
    .use(express.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

// Attempts to connect to database throws error or success message
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});