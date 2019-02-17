function mostrarMensaje() {
	document.getElementById("MensajeOculto").style.display = 'block';
}

function mostrarMensaje2() {
	document.getElementById("bloque2").style.display = 'block';
}

function contarHasta10() {
	var valorActual = parseInt(document.getElementById("botonContador").innerHTML)
	var valorSiguiente = valorActual + 1;
	document.getElementById("botonContador").innerHTML = valorSiguiente;
}



function cambiarMapa1(){
	//alert("ejecutando cambiarMapa1:  va a mostrar mapa2.gif")
	document.getElementById("imagenMapa").src = "mapa2.gif";
}

function cambiarMapa2(){
	//alert("ejecutando cambiarMapa2:  va a mostrar mapa.gif")
	document.getElementById("imagenMapa").src = "mapa.gif";
}