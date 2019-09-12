var express = require('express');
var router = express.Router();
var users = require("../controllers/users")

/* GET home page. */
router.get('/', users.getAll);
router.post('/login', users.login)
router.post('/save', users.save);

module.exports = router;
