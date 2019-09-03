var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('PRODUCTS');
});

router.get('/detail', function(req, res, next) {
    res.send('PRODUCTS - DETAIL');
});

router.get('/detail/:id', function(req, res, next) {
    console.log(req.param.id);
    console.log(req.query);
    console.log(req.body);
    
    // res.send(`PRODUCTS - DETAIL - ${req.params.id}`);
    
});

module.exports = router;
