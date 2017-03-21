"use strict";

module.exports = {

    /**
     * fields declaration:
     * id: primary key
     * userid: user's id in table 'User'
     * content: the content of a message
     * timestamp: the time at which the message is posted
     * location: the location where the message is posted
     */
    dropTable: function(){
        return "DROP TABLE IF EXISTS Message;";
    },
    createTable: function() {
        var sql = "CREATE TABLE Message (" +
            "id SERIAL PRIMARY KEY," +
            "userid INTEGER NOT NULL," +
            "content TEXT," +
            "timestamp CHAR(256) NOT NULL," +
            "location CHAR(256)," +
            "FOREIGN KEY (userid) REFERENCES Users(id)" +
            ");";
        return sql;
    },

    getAllPublicMessages: function () {
        var sql = "SELECT username, content, timestamp, location FROM Message, Users WHERE Users.id = Message.userid ORDER BY timestamp;";
        return sql;
    },

    insertMessage: function() {
        var sql = "INSERT INTO Message (userid, content, timestamp, location) VALUES ((SELECT id FROM Users WHERE username = ?), ?, ?, ?)";
        return sql;
    },

    getPublicMessage: function () {
        var sql = "SELECT username, content, timestamp, location FROM Message, Users WHERE username = ? AND Users.id = Message.userid ORDER BY timestamp;";
        return sql;
    }

};
