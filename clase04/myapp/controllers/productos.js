var productos = require("../models/productosModel")

module.exports = {
    getDestacados: async function(req, res, next){
        var data = await productos.getDestacados()
        res.status(200).json(data)
    },
    save: async function(req, res, next){
        await productos.save(req.body)
        res.status(200).json({"status":"ok"})
    },
    getProducto: async function(req, res, next){
        var data = await productos.getProducto(req.params.id)
        res.status(200).json(data)
    }
}

