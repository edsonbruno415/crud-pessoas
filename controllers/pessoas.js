const pessoasModel = require("../models/pessoas");

async function index(connection, req, res){
    const pessoas = await pessoasModel.findAll(connection);
    return res.render("pessoas", { pessoas });
}
async function deleteOne(connection, req, res){
    await pessoasModel.deleteOne(connection, req.params.id );
    return res.redirect("/pessoas");
}

module.exports = {
    index,
    deleteOne
}
