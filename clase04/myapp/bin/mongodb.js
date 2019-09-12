var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:7777/ecommerce', { useNewUrlParser: true }, function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});

module.exports = mongoose;