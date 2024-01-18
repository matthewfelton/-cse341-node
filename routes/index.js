// Web index file for routes
const routes = require('express').Router();
//connects to lession 1 controller
const lesson1Controller = require('../controllers/lesson1')

// example with out controller to pull date
// app.get('/', (req, res) => {
//    res.send('Matthew Felton');
//})

// example with using controller two routes
routes.get('/abby', lesson1Controller.abbyRoute);

// points route to contact.js
routes.use('/contacts', require('./contacts'));

// export module for rest of code to use
module.exports = routes;