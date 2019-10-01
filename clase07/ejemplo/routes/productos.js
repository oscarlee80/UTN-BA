var express = require('express');
var router = express.Router();
var products = require("../controllers/products")

/* GET home page. */
router.get('/', products.getAll);
router.get('/pdf/:productId', products.pdf);
router.get('/:productId', products.getById);
router.post('/', products.save);
router.put('/:id', products.update);

module.exports = router;

