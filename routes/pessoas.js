const express = require("express");
const pessoasController = require("../controllers/pessoas");

const pessoasRouter = ({ db }) => {
    const router = express.Router();

    router.get("/", pessoasController.index.bind(null, db));
    router.get("/delete/:id",pessoasController.deleteOne.bind(null, db));
    router.get("/create",pessoasController.createForm);
    router.post("/create",pessoasController.create.bind(null, db));
    router.get("/edit/:id",pessoasController.updateForm.bind(null, db));
    router.post("/update",pessoasController.update.bind(null, db));

    return router;
};

module.exports = pessoasRouter;