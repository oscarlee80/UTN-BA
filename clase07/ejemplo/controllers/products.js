var productModel = require("../models/productsModel")
var categoriasModel = require("../models/categoriasModel")

module.exports = {
    getAll: async function(req, res, next) {
        try{
            var producto = await productModel.paginate({

            },{
                populate: 'categoria',page:req.query.page
            })
            res.status(200).json({status: "success", message: "ok", data: producto});
        }catch(err){
            next(err);
        }
        
            
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
    update: async function(req, res, next) {
        var data = await productModel.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name }})
        res.status(200).json({status: "success", message: "Product added successfully!!!", data: data});

    },
    save: async function(req, res, next) {
        var product = new productModel({ 
            name: req.body.name, 
            sku: req.body.sku, 
            price: req.body.price,
            categoria:req.body.categoria
        });
        console.log(req.body.relacionados)
        product.relacionados.push(req.body.relacionados)
        var result = await product.save()

        res.status(200).json({status: "success", message: "Product added successfully!!!", data: result});
   },
   pdf: async function(req, res, next) {
    try{
            
            var id = req.params.productId;
            var data = await productModel.findById(id);
            
            res.render('index',{title:data["name"]},function(err,html){
                res.pdfFromHTML({
                    filename: 'generated.pdf',
                    htmlContent: html
                });
            })
        }catch(err){
            next(err)
        }    
   }
}
