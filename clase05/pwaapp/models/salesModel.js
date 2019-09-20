const mongoose = require('../bin/mongodb');

//Define a schema
const Schema = mongoose.Schema;
var childSchema = require("./productsModel").productSchema;
const SaleSchema = new Schema({
 date: {
  type: Date,
  default: Date.now(),
  trim: true,
  required: true,
 },
 user: {
    type:Schema.ObjectId, ref:"users"
 },
 product: [childSchema]
});
module.exports  =  mongoose.model('sales', SaleSchema);
