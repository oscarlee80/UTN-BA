var express = require('express');
var router = express.Router();
var users = require("../controllers/products")

/* GET home page. */
router.get('/', users.getAll);
router.get('/destacados', users.getById);
router.post('/', users.save);

module.exports = router;

