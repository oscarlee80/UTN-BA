var db = require("../bin/mysql")

module.exports.getAll = async function(){
    const [rows, fields] = await db.pool.execute("select * from usuarios");

    return rows;
}
module.exports.save = async function(nombre, apellido){
    await db.pool.query(
        'INSERT INTO usuarios SET nombre = ?, apellido = ?',
        [ nombre, apellido ]
      );
    return;
}

