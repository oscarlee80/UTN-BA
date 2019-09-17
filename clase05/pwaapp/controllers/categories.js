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
    getById: function(req, res, next) {
       var id = req.params.categoriasId;
       categoriesModel.findById(id, function(err, data){
           if (err) {
               next(err);
           } else {
               res.status(200).json({status: "success", message: "ok", data: data});
           }
       });
      },
    save: function(req, res, next) {
        categoriesModel.create({ 
            name: req.body.name
        }, function (err, result) {
            if (err) 
            next(err);
            else
            res.status(200).json({status: "success", message: "Categoria Agregada!", data: result});
        });
   }
}
