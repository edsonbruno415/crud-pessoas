//Methods with Driver MySQL
const init = db => {

    const findAll = () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM pessoas", (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    const deleteOne = (id) => {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM pessoas WHERE id =" + id + " limit 1", (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    const create = ({ nome, nascimento, cargo }) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO pessoas(nome, nascimento, cargo) values('${nome}','${nascimento}','${cargo}')`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    const findOne = (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM pessoas WHERE id = " + id + " limit 1", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    const update = ({ id, nome, nascimento, cargo }) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE pessoas SET nome = '${nome}', nascimento = '${nascimento}', cargo = '${cargo}' WHERE id = '${id}'`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    return {
        findAll,
        deleteOne,
        create,
        findOne,
        update
    }
}

module.exports = init;