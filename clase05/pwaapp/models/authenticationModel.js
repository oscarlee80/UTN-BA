const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');

var UsuariosSchema = mongoose.Schema({
    firstName: {
    type: String,
    trim: true,  
    required: [true, "El campo firstName es obligatorio"]
    },
    lastName: {
    type: String,
    trim: true,  
    required: [true, "El campo lastName es obligatorio"]
    },    
    email: {
    type: String,
    validate: {
        validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        },
        message: '{VALUE} no es un teléfono válido!'
    },
    trim: true,  
    required: [true, "El campo email es obligatorio"]
    },
    password: {
    type: String,
    trim: true,
    minlength: [8,"El password debe tener al menos 8 caracteres"],
    maxlength: [12,"El password debe tener como máximo 12 caracteres"],
    required: [true, "El campo password es obligatorio"]
    }
});
UsuariosSchema.pre ('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next ();
});
module.exports  =  mongoose.model('usuarios', UsuariosSchema);
