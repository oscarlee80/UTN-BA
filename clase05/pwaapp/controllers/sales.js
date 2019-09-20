var salesModel = require("../models/salesModel");
var productModel = require("../models/productsModel").productModel;

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
    save: async function(req, res, next) {
        var sales = new salesModel({
            user: req.body.user
        });
        console.log(productModel);
        let producto = await productModel.findById(req.body.product);
        sales.product.push(producto);
        var result = await sales.save();
        res.status(200).json({status: "success", message: "Compra Agregada!", data: result});
        
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
   }
}
