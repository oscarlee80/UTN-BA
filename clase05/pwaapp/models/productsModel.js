const mongoose = require('../bin/mongodb');

//Define a schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 sku: {
  type: String,
  trim: true,
  required: true
 },
 price: {
  type: Number,
  trim: true,
  required: true
 },
 categoria: {
  type:Schema.ObjectId, 
  ref:"categorias"
 },
 destacado: {
  type: Number,
  trim: true,
  required: true
 }

});
module.exports  =  mongoose.model('products', ProductSchema);
