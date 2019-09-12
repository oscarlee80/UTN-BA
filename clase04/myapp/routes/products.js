var express = require('express');
var router = express.Router();
var products = require("../controllers/products")

/* GET home page. */
router.get('/', products.getAll);
router.get('/destacados', products.getById);
router.post('/', products.save);

module.exports = router;

