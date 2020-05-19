const knex = require("knex");
const db = knex({
    client: "mysql",
    version: 6.1,
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "cadastro"
    }
});

/* Alternative connection with Driver MySQL for Node
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "cadastro"
});
*/

module.exports = db;
