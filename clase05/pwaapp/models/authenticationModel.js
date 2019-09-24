const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');

var UsuariosSchema = mongoose.Schema({
    firstName: {
    type: String,
    trim: true,  
    required: true,
    },
    lastName: {
    type: String,
    trim: true,  
    required: true,
    },    
    email: {
    type: String,
    trim: true,  
    required: true,
    },
    password: {
    type: String,
    trim: true,  
    required: true,
    }
});
UsuariosSchema.pre ('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next ();
});
module.exports  =  mongoose.model('usuarios', UsuariosSchema);
