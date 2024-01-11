// Web index file for routes
const routes = require('express').Router();
const lesson1Controller = required('../controllers/lesson1')
// example with out controller to pull date
// app.get('/', (req, res) => {
//    res.send('Matthew Felton');
//})

// example with using controller two routes
routes.get('/', lesson1Controller.matthewRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);

module.exports = routes;