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

// create schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

// export mongoose model
module.exports = mongoose.model('User', userSchema)
