const pessoasModel = require("../models/pessoas");

async function index(connection, req, res){
    const results = await pessoasModel.findAll(connection);
    return res.render("pessoas");
};

module.exports = {
    index
};
