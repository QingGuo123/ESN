"use strict";

module.exports = {

    /**
     * fields declaration:
     * id: primary key
     * userid: user's id in table 'User'
     * content: the content of an announcement
     * timestamp: the time at which the announcement is posted
     * location: the location where the announcement is posted
     */
    dropTable: function(){
        return "DROP TABLE IF EXISTS Announcement;";
    },
    createTable: function() {
        var sql = "CREATE TABLE IF NOT EXISTS Announcement (" +
            "id SERIAL PRIMARY KEY," +
            "userid INTEGER NOT NULL," +
            "content TEXT," +
            "timestamp CHAR(256) NOT NULL," +
            "location CHAR(256)," +
            "FOREIGN KEY (userid) REFERENCES Users(id)" +
            ");";
        return sql;
    },

    getAllAnnouncements: function () {
        var sql = "SELECT username, content, timestamp, location FROM Announcement, Users WHERE Users.id = Announcement.userid ORDER BY timestamp;";
        return sql;
    },

    insertAnnouncement: function() {
        var sql = "INSERT INTO Announcement (userid, content, timestamp, location) VALUES ((SELECT id FROM Users WHERE username = ?), ?, ?, ?)";
        return sql;
    }

};
