// connect node to mysql

// require mysql
var mysql = require("mysql");

// connection info
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "asdf",
    database: "burgers_db"
});

// connect to database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// export connection
module.exports = connection;