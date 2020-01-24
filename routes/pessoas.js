const express = require("express");

const pessoasRouter = ({ connection }) => {
    const router = express.Router();

    router.get("/", (req, res) => {
        connection.query("SELECT * FROM pessoas",(err, results)=>{
            return res.send(results);
        });
    });

    return router;
};

module.exports = pessoasRouter;