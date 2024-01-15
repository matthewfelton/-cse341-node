// Web index file for routes
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')
const userController = require('../controllers/user');
// example with out controller to pull date
// app.get('/', (req, res) => {
//    res.send('Matthew Felton');
//})

// example with using controller two routes
routes.get('/abby', lesson1Controller.abbyRoute);

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);



module.exports = routes;