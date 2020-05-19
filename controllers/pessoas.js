const init = db => {

    async function index(req, res) {
        const pessoas = await db("pessoas").select("*");
        return res.render("pessoas", { pessoas });
    }

    async function deleteOne(req, res) {
        const { id } = req.params;
        await db("pessoas").limit(1).where({ id }).del();
        return res.redirect("/pessoas");
    }

    async function createForm(req, res) {
        return res.render("create");
    }

    async function create(req, res) {
        const { nome, nascimento, cargo } = req.body;
        await db("pessoas").insert({ nome, nascimento, cargo });
        return res.redirect("/pessoas");
    }

    async function updateForm(req, res) {
        const { id } = req.params;
        const pessoa = await db("pessoas").limit(1).where({ id }).select("*");
        return res.render("update", { pessoa: pessoa[0] });
    }
    
    async function update(req, res) {
        const { id, nome, nascimento, cargo } = req.body;
        await db("pessoas").where({ id }).update({ nome, nascimento, cargo });
        return res.redirect("/pessoas");
    }

    return {
        index,
        deleteOne,
        createForm,
        create,
        updateForm,
        update
    }
}

module.exports = init;
