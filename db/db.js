"use strict";

// var config = require('../config/global.js');
// var db_path = config.db_config.ESN_db.path;

var init_db = require('./init_db');

module.exports = init_db.initDB();

var config = {
    user:"postgres",
    database:"ghost",
    password:"123456",
    port:5432,
}