const pessoasModel = require("../models/pessoas");

async function index(connection, req, res){
    const pessoas = await pessoasModel.findAll(connection);
    return res.render("pessoas", { pessoas });
}
async function deleteOne(connection, req, res){
    await pessoasModel.deleteOne(connection, req.params.id );
    return res.redirect("/pessoas");
}
async function createForm(req, res){
    return res.render("create");
}

module.exports = {
    index,
    deleteOne,
    createForm
}
