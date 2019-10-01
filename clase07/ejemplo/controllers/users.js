var users = require("../models/usersModel")

module.exports = {
    getAll: async function(req, res, next){
        var data = await users.getAll()
        console.log("data",data)
        res.status(200).json(data)
    },
    save: async function(req, res, next){
        await users.save("Leandro","Gil2")
        res.status(200).json({"status":"ok"})
    }
}

