/*
============================================
; Title:  API-Gateway: User Schema
; Author: Mark Watson
; Date: 28 March 2021
; Description: user.js schema file for the gateway project.
;===========================================
*/

// import mongoose for use
var mongoose = require('mongoose');

// create user schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

// export mongoose model
const User = module.exports = mongoose.model('User', userSchema)

/**
 Database operations
*/

// adds the new user to the database
module.exports.add = (user, callback) => {
  user.save(callback);
}

// query by ID
module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
}
