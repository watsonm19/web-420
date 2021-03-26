/*
============================================
; Title:  API-Gateway
; Author: Mark Watson
; Date: 21 March 2021
; Description: Routing (index.js) file for the gateway project.
;===========================================
*/

// imports required modules
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// export router for use
module.exports = router;
