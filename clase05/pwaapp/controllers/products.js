var productModel = require("../models/productsModel")
var categoriesModel = require("../models/categoriesModel")

module.exports = {
    getAll: function(req, res, next) {
        console.log(req.query)
       productModel.find({}, function(err, data){
        categoriesModel.populate(data,{path:'categoria'},function(err,data){
            if (err) {
                next(err);
            } else {
                res.status(200).json({status: "success", message: "ok", data: data});
            }
        })
            
        });
    },
    getById: function(req, res, next) {
       var id = req.params.productId;
       productModel.findById(id, function(err, data){
           if (err) {
               next(err);
           } else {
               res.status(200).json({status: "success", message: "ok", data: data});
           }
       });
      },
    save: function(req, res, next) {
        productModel.create({ 
            name: req.body.name, 
            sku: req.body.sku, 
            price: req.body.price,
            categoria:req.body.categoria,
            destacado:req.body.destacado
        }, function (err, result) {
            if (err) {
            next(err);
            //next('route');
            } else {
            res.status(200).json({status: "success", message: "Product added successfully!!!", data: result});
            }
        });
   },
   getDestacados: function(req, res, next) {
    console.log("Destacados")
        productModel.find({'destacado':1}, function(err, data){
            categoriesModel.populate(data,{path:'categoria'},function(err,data){
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({status: "success", message: "ok", data: data});
                }
            })
        });
   }
}
