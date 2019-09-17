const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
 firstName: {
  type: String,
  trim: true,
  required: true
 },
 lastName: {
  type: String,
  trim: true,
  required: true
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
});
module.exports  =  mongoose.model('users', UsersSchema);
