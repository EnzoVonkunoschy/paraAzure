
	//alert("ejecutando pie");
	document.getElementById("pieDePagina").innerHTML = '<footer><div align="center"><table class="pie"><!--tr><td class="izq"><img src="../wpp_1.png"</td></td> <td class="der"><big>+54 9 261 2 443928</big></td></tr--></table><p>CCT 6-303 - Escuela Francisca Godoy de Molina - Tel: 4941993 - Fleming 164 - Villa Tulumaya</p> </div></footer>';

	imagenMia('imagen01','images/wrd_cla_16/imagen_A.png',"");
	imagenMia('imagen02','images/wrd_cla_16/image001.png',"");
	imagenMia('imagen03','images/wrd_cla_16/image003.png',"");
	imagenMia('imagen04','images/wrd_cla_16/image005.png',"");
	imagenMia('imagen05','images/wrd_cla_16/image007.png',"");
	imagenMia('imagen06','images/wrd_cla_16/image009.png',"");
	imagenMia('imagen07','images/wrd_cla_16/image011.png',"");
	imagenMia('imagen08','images/wrd_cla_16/image013.png',"");
	imagenMia('imagen09','images/wrd_cla_16/image015.png',"");		
	imagenMia('imagen10','images/wrd_cla_16/image017.png',"");	
	imagenMia('imagen11','images/wrd_cla_16/image019.png',"");

function imagenMia(idMio,sourceMia,leyenda){
	//alert("ejecutando imagenMia");
	document.getElementById(idMio).innerHTML = '<div align="center">'+
          '<figure>'+
            '<img src='+sourceMia+'>'+
            '<figcaption>'+leyenda+
            '</figcaption></figure></div>'
}