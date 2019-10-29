var categoriesModel = require("../models/categoriesModel")

module.exports = {
    getAll: function(req, res, next) {
        console.log(req.query)
       categoriesModel.find({}, function(err, data){
            if (err) {
                next(err);
            } else {
                res.status(200).json({status: "success", message: "ok", data: data});
            }
        });
    },
    save: function(req, res, next) {
        categoriesModel.create({ 
            nombre: req.body.nombre
        }, function (err, result) {
            if (err) 
            next(err);
            else
            res.status(200).json({status: "success", message: "Categoria Agregada!", data: result});
        });
   }
}
