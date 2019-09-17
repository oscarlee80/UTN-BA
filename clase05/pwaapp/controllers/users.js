var users = require("../models/usersModel");

module.exports = {
    getAll: async function(req, res, next){
        var data = await users.getAll()
        console.log("data",data)
        res.status(200).json(data)
    },
    save: function(req, res, next){
        console.log(req.body);
      users.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
      }, function (err, result) {
          if (err) {
          next(err);
          } else {
          res.status(200).json({status: "success", message: "Usuario Agregado!", data: result});
          }
      });
    },
    login: function(req, res, next) {
       var email = req.body.email;
       users.find({'email':email}, function(err, data){
           if (err) {
               next(err);
           } else {
               //res.status(200).json({status: "success", message: "ok", data: data});
              console.log(data[0])
               if(data[0] && data[0].password==req.body.password){
                 res.status(200).json({status: "success", message: "usuario encontrado"});
               }else{
                 res.status(501).json({status: "fail", message: "credencial invalida"});
               }
           }
       });
      }
}
