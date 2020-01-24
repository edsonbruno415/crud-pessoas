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

module.exports = {
    findAll,
    deleteOne
}