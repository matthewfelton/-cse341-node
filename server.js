// express web sever 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Matthew Felton');
})

const port = 3000;

app.listen(process.env.port || port);
console.log('WebServer is listening at port ' + (process.env.port || port));
