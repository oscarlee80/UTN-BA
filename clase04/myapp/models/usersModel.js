var db = require("../bin/mysql")

module.exports.getAll = async function(){
    const [rows, fields] = await db.pool.execute("select * from usuarios");

    return rows;
}
module.exports.save = async function(datos){    
    await db.pool.query(
        'INSERT INTO usuarios SET nombre = ?, apellido = ?, email = ?, password = ?',
        [ datos.nombre, datos.apellido, datos.email, datos.password ]
        
      );
    return;
}
module.exports.checkUsuario = async function(datos){
    const [rows, fields] = await db.pool.execute("select * from usuarios where usuarios.nombre = ?",
    [datos.nombre]
    );

    return rows;
}

