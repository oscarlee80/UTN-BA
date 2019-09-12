const mongoose = require('../bin/mongodb');

//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 first_name: {
  type: String,
  trim: true,  
  required: true,
 },
 last_name: {
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
module.exports  =  mongoose.model('users', UserSchema);
