const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM pessoas", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject)=>{
        connection.query("DELETE FROM pessoas WHERE id ="+id+" limit 1",(err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        });
    });
}

const create = (connection, { nome, nascimento, cargo }) => {
    return new Promise((resolve, reject)=>{
        connection.query(`INSERT INTO pessoas(nome, nascimento, cargo) values('${nome}','${nascimento}','${cargo}')`,(err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        });
    });
}

const findOne = (connection, id) => {
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM pessoas WHERE id = "+ id +" limit 1",(err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}

const update = (connection, {id, nome, nascimento, cargo}) =>{
    return new Promise((resolve, reject)=>{
        connection.query(`UPDATE pessoas SET nome = '${nome}', nascimento = '${nascimento}', cargo = '${cargo}' WHERE id = '${id}'`,(err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        });
    });
}

module.exports = {
    findAll,
    deleteOne,
    create,
    findOne,
    update
}