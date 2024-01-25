// router for contacts data 
const routes = require('express').Router();

// connects to contact controller
const contacts_controller = require('../controllers/contacts')

// pull full contacts data and displays
routes.get('/', contacts_controller.pull_all);

// pull single contact by the db id to display
routes.get('/:id', contacts_controller.pull_single);

// posts new contact
routes.post('/', contacts_controller.create_contact);

// update existing contact
routes.put('/:id', contacts_controller.update_contact);

// deletes existing contact
routes.delete('/:id', contacts_controller.delete_contact);

// export module for rest of code to use
module.exports = routes;

