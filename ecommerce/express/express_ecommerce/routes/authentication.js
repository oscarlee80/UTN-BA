var express = require('express');
var router = express.Router();
var authentication = require("../controllers/authentication")

router.post('/login', authentication.login)
router.post('/register', authentication.save);


module.exports = router;
