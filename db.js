var mysql = require("mysql");

function login() {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root", 
        password: "root", 
        database: "hat_pro", 
        multipleStatements: true
    });

    return connection;
}

module.exports = login;