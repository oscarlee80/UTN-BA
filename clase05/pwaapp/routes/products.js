var express = require('express');
var router = express.Router();
var users = require("../controllers/products")

/* GET home page. */
router.get('/', products.getAll);

router.post('/', products.save);
router.get('/:productId', products.getById);

module.exports = router;

