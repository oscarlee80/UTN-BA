var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var authenticationModel = require ("../models/authenticationModel");
const jwt = require ('jsonwebtoken');

module.exports = {
    save: async function(req, res, next){
        var data = await authenticationModel.create({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password});
        res.json({status: "success", message: "Usuario agregado", data: data});
    },
    // login: function(req, res, next) {
    //    var email = req.body.email;
    //    users.find({'email':email}, function(err, data){
    //        if (err) {
    //            next(err);
    //        } else {
    //            //res.status(200).json({status: "success", message: "ok", data: data});
    //           console.log(data[0])
    //            if(data[0] && data[0].password==req.body.password){
    //              res.status(200).json({status: "success", message: "usuario encontrado"});
    //            }else{
    //              res.status(501).json({status: "fail", message: "credencial invalida"});
    //            }
    //        }
    //    });
    //   }
    login: async function (req, res, next) { 

        let usuario = await authenticationModel.findOne({email: req.body.email});
            if (usuario) {
                if (bcrypt.compareSync(req.body.password, usuario.password)) {
                    const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), { expiresIn: '1h'});
                    console.log (token, "Usuario Encontrado")
                    res.json({status: "success", message: "Usuario Encontrado", data: {user: usuario, token: token}});
                } else {
                    res.json ({status: "error", message: "Email o contraseña inválidos", data: null});
                }
            } else {
                console.log("Usuario No Encontrado");
                res.json({status: "not_found", message: "Usuario no encontrado", data: null});
            }
    }
}

