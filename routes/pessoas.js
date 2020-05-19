const pessoasRouter = db => {
    const express = require("express");
    const pessoasController = require("../controllers/pessoas")(db);
    const router = express.Router();

    router.get("/", pessoasController.index);
    router.get("/delete/:id", pessoasController.deleteOne);
    router.get("/create", pessoasController.createForm);
    router.post("/create", pessoasController.create);
    router.get("/edit/:id", pessoasController.updateForm);
    router.post("/update", pessoasController.update);

    return router;
};

module.exports = pessoasRouter;