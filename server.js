// express web sever 

const express = require('express');
const app = express();
const mongodb = require('./db/connection');
const port = process.env.port || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});