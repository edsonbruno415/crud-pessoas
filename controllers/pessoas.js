async function index(db, req, res){
    const pessoas = await db("pessoas").select("*");
    return res.render("pessoas",{ pessoas });
}
async function deleteOne(db, req, res){
    const { id } = req.params;
    await db("pessoas").limit(1).where({ id }).del();
    return res.redirect("/pessoas");
}
async function createForm(req, res){
    return res.render("create");
}
async function create(db, req, res){
    const { nome, nascimento, cargo } = req.body;
    await db("pessoas").insert({ nome, nascimento, cargo});
    return res.redirect("/pessoas");
}
async function updateForm(db, req, res){
    const { id } = req.params;
    const pessoa = await db("pessoas").limit(1).where({ id }).select("*");
    return res.render("update", { pessoa: pessoa[0] });
}
async function update(db, req, res){
    const { id, nome, nascimento, cargo } = req.body;
    await db("pessoas").where({ id }).update({ nome, nascimento, cargo });
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
