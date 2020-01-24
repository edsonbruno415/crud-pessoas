const express = require("express");
const path = require("path");
const mysql = require("mysql");
const pessoas = require("./routes/pessoas");
const port = process.env.PORT || 3000;
const app = express();
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "cadastro"
});

const dependencies = {
    connection
}

app.use(express.static(path.join(__dirname,"public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home"));
app.use("/pessoas", pessoas(dependencies));

connection.connect(() => {
    console.log("Conectado ao banco de dados!");
    app.listen(port, () => console.log("CRUD listening on port "+ port));
});

