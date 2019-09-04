var users = require("../models/usersModel")

module.exports = {
    getAll: async function(req, res, next){
        var data = await users.getAll()
        console.log("data",data)
        res.status(200).json(data)
    },
    save: async function(req, res, next){
        await users.save(req.body)
        res.status(200).json({"status":"ok"})
    },
    checkUsuario: async function(req, res, next){
        var data = await users.checkUsuario(req.body)
        console.log(data);
        res.status(200).json(data)
    }
}

