var express = require('express');
var router = express.Router();
var users = require("../controllers/users")

/* GET home page. */
router.get('/', users.getAll);
router.post('/login', users.login)
router.post('/register', users.save);
router.delete('/delete/:id', users.delete);
router.put('/update/:id', users.update);

module.exports = router;
