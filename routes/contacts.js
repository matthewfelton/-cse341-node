// router for contacts data 
const routes = require('express').Router();

// connects to contact controller
const contacts_controller = require('../controllers/contacts')

// Pull full contacts data and displays
routes.get('/', contacts_controller.pull_all);

// pull single contact by the db id to display
routes.get('/:id', contacts_controller.pull_single);

// export module for rest of code to use
module.exports = routes;

