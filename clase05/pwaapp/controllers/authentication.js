var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var authenticationModel = require ("../models/authenticationModel");
const jwt = require ('jsonwebtoken');

module.exports = {
    save: async function(req, res, next){
        var data = await authenticationModel.create({ email: req.body.email, password: require.body.password});
        res.json({status: "success", message: "Usuario agregado", data: data});
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
      },
    update: async function(req, res, next) {
        var data = await users.findByIdAndUpdate(req.params.id, { $set: {firstName: req.body.firstName }});
        res.status(200).json({status: "success", message: "usuario modificado"});
    },
    delete: async function(req, res, next) {
        var data = await users.findByIdAndDelete(req.params.id);
        res.status(200).json({status: "success", message: "usuario eliminado"});
    }
    
}
