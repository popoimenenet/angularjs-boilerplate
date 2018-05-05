var express = require("express");
var app = express();

app.use(function (req, res, next) {
	console.log(new Date().toISOString(), req.method, req.protocol, req.hostname, req.path);
	next();
})

app.use(express.static("dist"));

app.listen(3000);
console.log("Console is running at port 3000")