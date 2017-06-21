var colores=["rojo", "azul", "amarillo", "negro", "rosa", "verde", "marron", "morado"]; //Todos los colores
var aleatorio=[]; //Resultado a descubrir
var linea=[]; //Resultado que introduce el usuario
var comprobacion=[]; //Variable para la comprobacion
var cont=1; //Contador de linea
var ti=0; //Varaible para  contar los Totales iguales.

// Ejecutar cuando inicie la pagina , la funcion aleatorio y deshabilitar boton de comprobar
window.onload = function(){
	document.getElementById("boton").setAttribute("disabled", "disabled");
}

//resultado aleatorio
for (var i = 0; i < 4; i++) {
	x=Math.floor(Math.random() * 8);
	aleatorio.push(colores[x]);
}

//seleccionar colores
function seleccionar(quin){
	console.log(quin);
	linea.push(quin);

	for (var i = 0; i < linea.length; i++) {
		document.getElementById("l"+cont+"_"+i).innerHTML='<img src="img/'+linea[i]+'.png">';
		if (i == 3) {
			document.getElementById("boton").removeAttribute("disabled");
		}
	}
}

//Borrar linea
function borrar(){
	for (var i = 0; i < linea.length; i++) {
		document.getElementById("l"+cont+"_"+i).innerHTML="<img src='img/zero.png'>";
	}
	linea=[];
}

//Comprobar resultado
function comprobar(){
	//Bucle para comparar lo que el usuario ha introducido con el resultado final
	for (var i = 0; i < aleatorio.length; i++) {
		if (aleatorio[i]==linea[i]) {
			comprobacion.push("todo");
			ti++;
		}else if (linea.indexOf(aleatorio[i])!=(-1)) {
			comprobacion.push("color");
		}else{
			comprobacion.push("nada")
		}

		comprobacion.sort();	
	}

	//Bucle para recorrer el array de comprobacion , para insertar la imagen de si ha acertado todo, color o nada
	for (var i = 0; i < comprobacion.length; i++) {
		document.getElementById("l"+cont+"_p"+cont).innerHTML=document.getElementById("l"+cont+"_p"+cont).innerHTML+'<img src="img/'+comprobacion[i]+'.png">';
		document.getElementById("tr"+cont).style.backgroundColor="#F4F4F4";
	}

	//Comprobar si ha acertado todo y si ha gastado todos los intentos.
	if (ti==4) {
		for (var i = 0; i < aleatorio.length; i++) {
			document.getElementById("result").style.visibility="visible";
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+'<img src="img/'+aleatorio[i]+'.png">';
			document.getElementById("ganado").innerHTML="<strong>HAS GANADO!!</strong>"
			document.getElementById("volverjugar").style.visibility="visible";
			document.getElementById("boton").style.visibility="hidden";
			document.getElementById("botonborrar").style.visibility="hidden";
			document.getElementById("volverjugar").style.position="relative";
			document.getElementById("result").style.position="relative";
		}
	}if (cont==10) {
		for (var i = 0; i < aleatorio.length; i++) {
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+'<img src="img/'+aleatorio[i]+'.png">';
			document.getElementById("perdido").innerHTML="<strong>HAS PERDIDO!!<strong>";
			document.getElementById("result").style.visibility="visible";
			document.getElementById("volverjugar").style.visibility="visible";
			document.getElementById("boton").style.visibility="hidden";
			document.getElementById("botonborrar").style.visibility="hidden";
			document.getElementById("volverjugar").style.position="relative";
			document.getElementById("result").style.position="relative";
			document.getElementById("result").style.backgroundColor="#FC6565";
		}
	}if (cont) {}

	cont++;
	document.getElementById("boton").setAttribute("disabled", "disabled");

	//Reiniciar variables
	linea=[];
	comprobacion=[];
	ti=0;	
}

//Para "volver a jugar"
function reinicio(){
	location.reload();
}