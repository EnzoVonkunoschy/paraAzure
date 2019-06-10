function calcular(){
	//alert("Calculando eqSerie")
	/*capturo los datos de entrada*/
	var cap1 = document.getElementById("c1").value;
	var cap2 = document.getElementById("c2").value;
	/*parseo a flotante*/
	capa1 = parseFloat(cap1);
	capa2 = parseFloat(cap2);
	//console.log(capa1+capa2);

	/*calculo el equivalente serie*/
	var cEquivSerie =(capa1*capa2)/(capa1+capa2);
	document.getElementById("eqSerie").innerHTML = cEquivSerie.toFixed(3);
	/*calculo el equivalente paralelo*/
	var cEquivParal = (capa1 + capa2);
	document.getElementById("eqParal").innerHTML = cEquivParal.toFixed(3);
}