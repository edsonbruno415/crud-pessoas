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
async function create(connection, req, res){
    await pessoasModel.create(connection, req.body);
    return res.redirect("/pessoas");
}
async function updateForm(connection, req, res){
    const pessoa = await pessoasModel.findOne(connection, req.params.id );
    return res.render("update", { pessoa: pessoa[0] });
}
async function update(connection, req, res){
    await pessoasModel.update(connection, req.body);
    return res.redirect("/pessoas");
}

module.exports = {
    index,
    deleteOne,
    createForm,
    create,
    updateForm,
    update
}
