/*
============================================
; Title:  API-Gateway
; Author: Professor Krasso
; Date: 21 March 2021
; Modified by: Mark Watson
; Description: config.js file
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';

module.exports = config;
