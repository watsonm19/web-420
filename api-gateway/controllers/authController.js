/*
============================================
; Title:  API-Gateway: Authentication Controller
; Author: Mark Watson
; Date: 21 March 2021
; Description: Authentication controller for the gateway project.
;===========================================
*/

// imports user.js for use
var User = require('../models/user');

// register a new user on POST
exports.user_register = function(req, res) {
  res.send('NOT IMPLEMENTED: User registration POST');
};

// verify token on GET
exports.user_token = function(req, res) {
  res.send('NOT IMPLEMENTED: User token lookup GET')
}
