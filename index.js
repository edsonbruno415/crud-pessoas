const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const db = require("./models/index");
const pessoas = require("./routes/pessoas")(db);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home"));
app.use("/pessoas", pessoas);

app.listen(port, () => console.log("CRUD listening on port " + port));

