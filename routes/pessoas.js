const express = require("express");
const pessoasController = require("../controllers/pessoas");

const pessoasRouter = ({ connection }) => {
    const router = express.Router();

    router.get("/", pessoasController.index.bind(null, connection));
    router.get("/delete/:id",pessoasController.deleteOne.bind(null, connection));
    router.get("/create",pessoasController.createForm);
    router.post("/create",pessoasController.create.bind(null, connection));
    router.get("/edit/:id",pessoasController.updateForm.bind(null, connection));
    router.post("/update",pessoasController.update.bind(null, connection));

    return router;
};

module.exports = pessoasRouter;