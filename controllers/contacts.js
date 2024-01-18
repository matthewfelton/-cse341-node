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

// export pull request lists to rest of the code 
module.exports = {
    pull_all,
    pull_single
};