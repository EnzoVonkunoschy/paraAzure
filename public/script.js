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
	document.getElementById("imagenMapa").src = "mapa2.png";
}

function cambiarMapa2(){
	document.getElementById("imagenMapa").src = "mapa.png";
}