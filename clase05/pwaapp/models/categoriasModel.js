const mongoose = require('../bin/mongodb');

//Define a schema
const Schema = mongoose.Schema;
const CategoriaSchema = new Schema({
 nombre: {
  type: String,
  trim: true,  
  required: true,
 }
});
module.exports  =  mongoose.model('categorias', CategoriaSchema);
