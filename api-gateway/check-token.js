/*
====================================================
; Title:  API-Gateway
; Author: Professor Krasso
; Date: 9 May 2021
; Modified by: Mark Watson
; Description: Creates the checkToken() function which will
    be responsible for accessing the request headers
    ‘x-access-token’ field and checking the tokens validity
    against the config.web’s secret key.
;====================================================
*/

// imports required modules
var jwt = require('jsonwebtoken');
var config = require('./config');

/**
 * Check the HTTP header for a valid JSON web token
 * @param req
 * @param res
 * @param next
 */
 function checkToken(req, res, next) {

  var token = req.headers['x-access-token'];

  if (!token)
      return res.status(403).send({ auth: false, message: 'No token provided.'});

  jwt.verify(token, config.web.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

      req.userId = decoded.id;
      next();
  });
}

// exports function for use
module.exports = checkToken;
