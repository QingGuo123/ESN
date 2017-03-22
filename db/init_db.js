"use strict";

var fs = require("fs");
var pg = require('pg');
pg.defaults.ssl = true;


var sql_user = require('../db/sql_user');
var sql_message = require('../db/sql_message');
var sql_announcement = require('../db/sql_announcement');
var sql_status = require('../db/sql_status');

module.exports = {
    initDB : function(req, res){
        var pg = require('pg');
        var conString = "postgres://tpfvhbwcgicrwb:5f531406e338933f29d5e1b3d04c404d645566b1a3761b2abbd8570643292287@ec2-54-163-252-55.compute-1.amazonaws.com:5432/d3h7um3eqq3pmp";
        //process.env.DATABASE_URL
        //||  "postgres://onesecond:plusonesecond@localhost:5432/ecn_db";
        // pg.connect(conString, function(err, client) {
        //     if (err) throw err;
        //     console.log('Connected to postgres!');
        //
        //     client
        //         .query(sql_user.createTable())
        //         .on('row', function(row) {
        //             console.log(JSON.stringify(row));
        //         });
        // });
        // pg.connect(conString, function(err, client) {
        //     if (err) throw err;
        //     console.log('Connected to postgres!');
        //
        //     client
        //         .query(sql_user.insertAdminUser("adminpwd"))
        //         .on('row', function(row) {
        //             console.log(JSON.stringify(row));
        //         });
        // });
        // pg.connect(conString, function(err, client) {
        //     if (err) throw err;
        //     console.log('Connected to postgres!');
        //
        //     client
        //         .query(sql_message.createTable())
        //         .on('row', function(row) {
        //             console.log(JSON.stringify(row));
        //         });
        // });
        // pg.connect(conString, function(err, client) {
        //     if (err) throw err;
        //     console.log('Connected to postgres!');
        //
        //     client
        //         .query(sql_announcement.createTable())
        //         .on('row', function(row) {
        //             console.log(JSON.stringify(row));
        //         });
        // });
        // pg.connect(conString, function(err, client) {
        //     if (err) throw err;
        //     console.log('Connected to postgres!');
        //
        //     client
        //         .query(sql_status.createTable())
        //         .on('row', function(row) {
        //             console.log(JSON.stringify(row));
        //         });
        // });

        var client = new pg.Client(conString);
        client.connect();
        // var dropUserTable = client.query(sql_user.dropTable(), function(err) {
        //     if (err) throw err;
        // });
        // var dropAnnounTable = client.query(sql_announcement.dropTable(), function(err) {
        //     if (err) throw err;
        // });
        // var dropMessageTable = client.query(sql_message.dropTable(), function(err) {
        //     if (err) throw err;
        // });
        // var dropStatusTable = client.query(sql_status.dropTable(), function(err) {
        //     if (err) throw err;
        // });
        var createUserTable = client.query(sql_user.createTable(), function(err) {
            console.log("created users table ");
            if (err) throw err;
        });
        // var insertAdmin = client.query(sql_user.insertAdminUser("adminpwd"), function(err) {
        //     if (err) throw err;
        // });
        var createMessageTable = client.query(sql_message.createTable(), function(err) {
            console.log("created message table ");
            if (err) throw err;
        });
        var createAnnounTable = client.query(sql_announcement.createTable(), function(err) {
            console.log("created announcement table ");
            if (err) throw err;
        });
        var createStatusTable = client.query(sql_status.createTable(), function(err) {
            console.log("created status table ");
            if (err) throw err;
        });
        console.log("create tables succeed");

    }
}
