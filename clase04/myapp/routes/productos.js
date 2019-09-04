var express = require('express');
var router = express.Router();
var productos = require("../controllers/productos")

/* GET home page. */

router.get('/destacados', productos.getDestacados);
router.post('/', productos.save);
router.get('/:id', productos.getProducto);

module.exports = router;

