var express = require('express');
var router = express.Router();
var products = require("../controllers/products")
var categories = require("../controllers/categories")

/* GET home page. */
router.get('/', products.getAll);
router.get('/destacados', products.getDestacados);
router.post('/add', products.save);
router.get('/categories', categories.getAll);
router.post('/categories', categories.save);
router.get('/detalle/:productId', products.getById);


module.exports = router;

