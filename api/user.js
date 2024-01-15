const express = require('express');
const mongodb = require('mongodb').MongoClient;
const user = require('../controllers/user');
const route = express.router();

route.post('/', async(req, res) => {
    const{first_name, last_name} = req.body;
    let user = {};
    user.first_name = first_name;
    user.last_name = last_name;
    let user_model = new user(user);
    await user_model.save();
    res.json(user_model);

})

module.exports = route;