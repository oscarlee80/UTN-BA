var express = require('express');
var router = express.Router();
var sales = require("../controllers/sales");

/* GET home page. */
router.post('/', sales.save);
router.get('/:id', sales.getById);

module.exports = router;

