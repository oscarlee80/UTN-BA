var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt'); 
var autenticationModel = require("../models/autenticationModel")
var transporter = require("../bin/email")
const jwt = require('jsonwebtoken');

module.exports = {
  save: async function(req, res, next) {
    try{
      var data = await autenticationModel.create({ name: req.body.name, usuario: req.body.usuario, password: req.body.password, phone: req.body.phone, email: req.body.email });
      let info = await transporter.sendMail({
          from: process.env.EMAIL_USER, // sender address
          to: req.body.email, // list of receivers
          subject: 'Bienvenido '+req.body.name, // Subject line
          text: 'Bienvenido a este sitio', // plain text body
          html: '<b>Bienvenido a este sitio</b>' // html body
      });
      res.json({status: "success", message: "User added successfully!!!", data: data}); 
    }catch(err){
      console.log(err)
      next(err);
    }
         
  },
  login: async function(req, res, next) {
    try{
      var usuario = await autenticationModel.findOne({usuario:req.body.usuario});
        if (usuario) {
          if(bcrypt.compareSync(req.body.password, usuario.password)) {
            const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), { expiresIn: '1h' });
            console.log(token,usuario)
            res.status(200).json({status:"success", message: "user found!!!", data:{user: usuario, token:token}});
          }else{
            res.status(400).json({status:"error", message: "Invalid user/password!!!", data:null});
          }
        
          
      }else{
        res.status(400).json({status:"not_found", message: "user not found!!!", data:null});
      }
    }catch(err){
      
      next(err);
    }
    
  }
}

