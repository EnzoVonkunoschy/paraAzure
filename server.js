var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

 //routes
var nYa ="";
var ed ="";
var te ="";

 app.post('/contacto',function(req,res){
 	console.log("--app.post('/contacto..)-->[server]")
 	nYa=req.body.nomYape;
 	console.log(nYa);
 	ed=req.body.edad;
 	console.log(ed);
 	te=req.body.tel;
 	console.log(te);
 	res.send("<p>Registrado</p><a href='/'>volver</a>")
 })

app.get('/getListado',function(req,res){
	res.send("<p>"+nYa+"</p><p>"+ed+"</p></p>"+te+"</p>");
})
 app.get("/",function(req, res){
 	res.render("index");
 })

 app.listen(port, function() {
 	console.log("app running");
 })