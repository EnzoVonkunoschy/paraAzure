var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var misFs = require('./misFunciones');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

 //routes
var nYa = [];
var ed =[];
var te =[];

 app.post('/contacto',function(req,res){
 	console.log("--app.post('/contacto..)-->[server]")
 	nYa.push(req.body.nomYape);

 	ed.push(req.body.edad);

 	te.push(req.body.tel);

 	res.send("<p>Registrado</p><a href='/'>volver</a>")
 })

app.post('/getListado',function(req,res){
	res.send("<p>"+nYa+"</p><p>"+ed+"</p></p>"+te+"</p>");
})
 app.get("/",function(req, res){
 	res.render("index");
 });

 app.post('/verificar',function(req,res){
 	console.log("--.post('/verificar...)-->[server]");
 	var str = "";
 	var str2 = "";
 	var pss = req.body.password;
 	if(pss=="15Milanesas"){

	 	var i = 0;
	 	for(i = 0 ; i < nYa.length ; i++){
	 		str =  misFs.emp_td(nYa[i])+misFs.emp_td(ed[i])+misFs.emp_td(te[i]);
	 		str = misFs.emp_tr(str);
	 		str2 = str2 + str;
	 		str = "";
		};
		str2 = misFs.emp_table(str2);
		console.log(str2);
 		res.send(str2+"<a href='/'>volver</a>"+misFs.miFormato());
 		console.log("<-- data --[server]");
 	}else{
 		res.send("<p>Error</p><a href='/'>volver</a>");
 		console.log("<-- error --[server]"); 		
 	}
 });

 app.listen(port, function() {
 	console.log("app running");
 })