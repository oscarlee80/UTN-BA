var express = require('express');
var router = express.Router();
var users = require("../controllers/users")

/* GET home page. */
router.get('/', users.getAll);
router.post('/', users.save);
router.post('/login', users.checkUsuario);

module.exports = router;
