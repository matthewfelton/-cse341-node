// router for contacts data 
const express = require('express');
const router = express.Router();

// connects to contact controller
const contacts_controller = require('../controllers/contacts')

// pull full contacts data and displays
router.get('/', contacts_controller.pull_all);

// pull single contact by the db id to display
router.get('/:id', contacts_controller.pull_single);

// posts new contact
router.post('/', contacts_controller.create_contact);

// update existing contact
router.put('/:id', contacts_controller.update_contact);

// deletes existing contact
router.delete('/:id', contacts_controller.delete_contact);

// export module for rest of code to use
module.exports = router;

