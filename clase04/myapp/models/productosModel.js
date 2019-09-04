var db = require("../bin/mysql")

module.exports.getDestacados = async function(){
    const [rows, fields] = await db.pool.execute("select * from productos WHERE productos.destacado = 1");

    return rows;
}
module.exports.save = async function(datos){
    await db.pool.query(
        'INSERT INTO productos SET nombre = ?, descripcion = ?, sku = ?, precio = ?, precio_oferta = ?, categoria_id = ?, cantidad = ?, destacado = ?, f_eliminado = ?',
        [ datos.nombre, datos.descripcion, datos.sku, datos.precio, datos.precio_oferta, datos.categoria_id, datos.cantidad, datos.destacado, datos.f_eliminado ]
      );
    return;
}
module.exports.getProducto = async function(id){
    const [rows, fields] = await db.pool.execute("select * from productos WHERE productos.id = ?", 
    [id]
    );

    return rows;
}
