// points variable to path of db connection information 
const mongodb = require('../db/connection');
// important ObjectId and allows single pull contact to work and not error out and murder the server
const ObjectId = require('mongodb').ObjectId;

// pull all contacts from db and creats an array using asynchronous fuction
const pull_all = async (req, res, next) => {
    // Using MongoDB's async API to get the 'contacts' collection 
    const result = await mongodb.getDb().db().collection('contacts').find();
    // Converting the result to an array
    result.toArray().then((lists) => {
        // Setting the response header to indicate JSON content
        res.setHeader('Content-Type', 'application/json');
        // Sending a JSON response with the fetched contacts
        res.status(200).json(lists);
        });
};

// pull single contact from the db and creats an array using asynchronous fuction
const pull_single = async (req, res, next) => {
    // Extracting the contact ID from the request parameters
    const userId = new ObjectId(req.params.id);

    // Using MongoDB's async API to get the specified contact by ID
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({ _id: userId });

    // Converting the result to an array
    result.toArray().then((lists) => {
        // Setting the response header to indicate JSON content
        res.setHeader('Content-Type', 'application/json');

        // Sending a JSON response with the fetched single contact
        res.status(200).json(lists[0]);
    });
};

// creates new contact and sends to db
const create_contact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
};

// update existing db
const update_contact = async (req, res) => {
    try {
      // Extracting contact ID from the request parameters
    const contactId = req.params.id;

      // Validate that contactId is a valid ObjectId before attempting to create ObjectId
    if (!ObjectId.isValid(contactId)) {
        return res.status(400).json({ error: 'Invalid contact ID format' });
    }

    const userId = new ObjectId(contactId);

      // Creating a contact object from the request body
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
      // Updating the contact with the specified ID in the 'contacts' collection
    const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: userId }, contact);
    console.log('Update Response:', response);
      // Responding with status 204 if the contact is successfully updated
    if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
        // Responding with status 404 if the contact does not exist
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
      // Log the error for troubleshooting
        console.error('Error in update_contact:', error);

      // Responding with status 500 and an error message if there's an issue
        res.status(500).json({ error: 'Some error occurred while updating the contact.' });
    }
};
// delete existing contact
const delete_contact = async (req, res) => {
    try {
      // Extracting contact ID from the request parameters
    const contactId = req.params.id;
      // Validate that contactId is a valid ObjectId before attempting to create ObjectId
    if (!ObjectId.isValid(contactId)) {
        return res.status(400).json({ error: 'Invalid contact ID format' });
    }

    const userId = new ObjectId(contactId);

      // Removing the contact with the specified ID from the 'contacts' collection
    const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId });

        console.log(response);

        // Responding with status 204 if the contact is successfully deleted
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            // Responding with status 404 if the contact does not exist
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
      // Responding with status 500 and an error message if there's an issue
        console.error(error);
        res.status(500).json({ error: 'Some error occurred while deleting the contact.' });
    }
};



// export pull request lists to rest of the code 
module.exports = {
    pull_all,
    pull_single,
    create_contact,
    update_contact,
    delete_contact
};