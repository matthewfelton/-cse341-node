// Web index file for routes

const express = require('express');
const router = express.Router();

// connects to lession 1 controller
// const lesson1Controller = require('../controllers/lesson1')

// example with out controller to pull date
// app.get('/', (req, res) => {
//    res.send('Matthew Felton');
//})

// example with using controller two routes
// routes.get('/abby', lesson1Controller.abbyRoute);

// swagger route
router.use('/api-doc', require('./swagger'));
// points route to contact.js
router.use('/contacts', require('./contacts'));

// export module for rest of code to use
module.exports = router;