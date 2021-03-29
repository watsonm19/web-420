/*
============================================
; Title:  API-Gateway
; Author: Professor Krasso
; Date: 21 March 2021
; Modified by: Mark Watson
; Description: config.js file for the gateway project.
;===========================================
*/

// create a config object with default settings
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'waverly'

// export config for use
module.exports = config;
