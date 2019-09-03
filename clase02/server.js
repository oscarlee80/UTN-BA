let http = require("http");

var server = http.createServer(function (request, response) {
    response.end("Hola Mundo");
})