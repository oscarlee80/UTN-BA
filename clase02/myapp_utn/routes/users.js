var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"users": [
    {"id":1, "nombre": "Oscar", "edad": 38},
    {"id":2, "nombre": "Tomas", "edad": 20},
    {"id":3, "nombre": "Gaby", "edad": 25}
  ]});
});

router.post('/login', function(req, res, next) {
  res.json({"users":[
    {"id":1, "nombre": "Oscar", "edad": 38},
    {"id":2, "nombre": "Tomas", "edad": 20},
    {"id":3, "nombre": "Gaby", "edad": 25}]
  });
  console.log(req.body);
});


router.post('/register', function(req, res, next) {
  res.send('USERS - REGISTER');
});

module.exports = router;
