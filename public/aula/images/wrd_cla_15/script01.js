
	//alert("ejecutando pie");
	document.getElementById("pieDePagina").innerHTML = '<footer><div align="center"><table class="pie"><!--tr><td class="izq"><img src="../wpp_1.png"</td></td> <td class="der"><big>+54 9 261 2 443928</big></td></tr--></table><p>CCT 6-303 - Escuela Francisca Godoy de Molina - Tel: 4941993 - Fleming 164 - Villa Tulumaya</p> </div></footer>';

	imagenMia('imagen01','images/wrd_cla_15/image014.png',"");
	imagenMia('imagen02','images/wrd_cla_15/image001.png',"");
	imagenMia('imagen03','images/wrd_cla_15/image015.png',"");
	imagenMia('imagen04','images/wrd_cla_15/image016.png',"");
	imagenMia('imagen05','images/wrd_cla_15/image018.png',"");
	imagenMia('imagen06','images/wrd_cla_15/image019.png',"");
	imagenMia('imagen07','images/wrd_cla_15/image020.png',"");
	imagenMia('imagen08','images/wrd_cla_15/image021.png',"");
	imagenMia('imagen09','images/wrd_cla_15/image022.png',"");		
	imagenMia('imagen10','images/wrd_cla_15/image023.png',"");	
function imagenMia(idMio,sourceMia,leyenda){
	//alert("ejecutando imagenMia");
	document.getElementById(idMio).innerHTML = '<div align="center">'+
          '<figure>'+
            '<img src='+sourceMia+'>'+
            '<figcaption>'+leyenda+
            '</figcaption></figure></div>'
}