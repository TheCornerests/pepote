var resultados=["X","1","X","1","2","1","2","X","1","X","1","X","X","2","2"];
var eleccion=[];



	function comprobar(){
		var contador=0;

		if(resultados[0]==eleccion[0]){
			contador++;
			document.getElementById("acertado").innerHTML="Acertado";
			document.getElementById("acertado").style.color="green";
		}else{
			document.getElementById("acertado").innerHTML=resultados[0];
			document.getElementById("acertado").style.color="red";
		}
		if(resultados[1]==eleccion[1]){
			contador++
			document.getElementById("acertado1").innerHTML="Acertado";
			document.getElementById("acertado1").style.color="green";
		}else{
			document.getElementById("acertado1").innerHTML=resultados[1];
			document.getElementById("acertado1").style.color="red";
		}
		if(resultados[2]==eleccion[2]){
			contador++;
			document.getElementById("acertado2").innerHTML="Acertado";
			document.getElementById("acertado2").style.color="green";
		}else{
			document.getElementById("acertado2").innerHTML=resultados[2];
			document.getElementById("acertado2").style.color="red";
		}
		if(resultados[3]==eleccion[3]){
			contador++;
			document.getElementById("acertado3").innerHTML="Acertado";
			document.getElementById("acertado3").style.color="green";
		}else{
			document.getElementById("acertado3").innerHTML=resultados[3];
			document.getElementById("acertado3").style.color="red";
		}
		if(resultados[4]==eleccion[4]){
			contador++;
			document.getElementById("acertado4").innerHTML="Acertado";
			document.getElementById("acertado4").style.color="green";
		}else{
			document.getElementById("acertado4").innerHTML=resultados[4];
			document.getElementById("acertado4").style.color="red";
		}
		if(resultados[5]==eleccion[5]){
			contador++;
			document.getElementById("acertado5").innerHTML="Acertado";
			document.getElementById("acertado5").style.color="green";
		}else{
			document.getElementById("acertado5").innerHTML=resultados[5];
			document.getElementById("acertado5").style.color="red";
		}
		if(resultados[6]==eleccion[6]){
			contador++;
			document.getElementById("acertado6").innerHTML="Acertado";
			document.getElementById("acertado6").style.color="green";
		}else{
			document.getElementById("acertado6").innerHTML=resultados[6];
			document.getElementById("acertado6").style.color="red";
		}
		if(resultados[7]==eleccion[7]){
			contador++;
			document.getElementById("acertado7").innerHTML="Acertado";
			document.getElementById("acertado7").style.color="green";
		}else{
			document.getElementById("acertado7").innerHTML=resultados[7];
			document.getElementById("acertado7").style.color="red";
		}
		if(resultados[8]==eleccion[8]){
			contador++;
			document.getElementById("acertado8").innerHTML="Acertado";
			document.getElementById("acertado8").style.color="green";
		}else{
			document.getElementById("acertado8").innerHTML=resultados[8];
			document.getElementById("acertado8").style.color="red";
		}
		if(resultados[9]==eleccion[9]){
			contador++;
			document.getElementById("acertado9").innerHTML="Acertado";
			document.getElementById("acertado9").style.color="green";
		}else{
			document.getElementById("acertado9").innerHTML=resultados[9];
			document.getElementById("acertado9").style.color="red";
		}
		if(resultados[10]==eleccion[10]){
			contador++;
			document.getElementById("acertado10").innerHTML="Acertado";
			document.getElementById("acertado10").style.color="green";
		}else{
			document.getElementById("acertado10").innerHTML=resultados[10];
			document.getElementById("acertado10").style.color="red";
		}
		if(resultados[11]==eleccion[11]){
			contador++;
			document.getElementById("acertado11").innerHTML="Acertado";
			document.getElementById("acertado11").style.color="green";
		}else{
			document.getElementById("acertado11").innerHTML=resultados[11];
			document.getElementById("acertado11").style.color="red";
		}
		if(resultados[12]==eleccion[12]){
			contador++;
			document.getElementById("acertado12").innerHTML="Acertado";
			document.getElementById("acertado12").style.color="green";
		}else{
			document.getElementById("acertado12").innerHTML=resultados[12];
			document.getElementById("acertado12").style.color="red";
		}
		if(resultados[13]==eleccion[13]){
			contador++;
			document.getElementById("acertado13").innerHTML="Acertado";
			document.getElementById("acertado13").style.color="green";
		}else{
			document.getElementById("acertado13").innerHTML=resultados[13];
			document.getElementById("acertado13").style.color="red";
		}
		if(resultados[14]==eleccion[14]){
			contador++;
			document.getElementById("acertado14").innerHTML="Acertado";
			document.getElementById("acertado14").style.color="green";
		}else{
			document.getElementById("acertado14").innerHTML=resultados[14];
			document.getElementById("acertado14").style.color="red";
		}
		document.getElementById("contar").innerHTML="Has acertado " + contador + " resultados.";
	}
	
	function p1(){
	
		a=document.getElementById("uno_uno").value;
		b=document.getElementById("x_uno").value;
		c=document.getElementById("dos_uno").value;
		
		if(document.getElementById("uno_uno").checked){
			document.getElementById("x_uno").disabled=true;
			document.getElementById("dos_uno").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_uno").disabled=true;


		}else if(document.getElementById("x_uno").checked){
			document.getElementById("uno_uno").disabled=true;
			document.getElementById("dos_uno").disabled=true;
			eleccion.push(b);
			document.getElementById("x_uno").disabled=true;
		}else{
			document.getElementById("x_uno").disabled=true;
			document.getElementById("uno_uno").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_uno").disabled=true;
		}
	}

	function p2(){
	
		a=document.getElementById("uno_dos").value;
		b=document.getElementById("x_dos").value;
		c=document.getElementById("dos_dos").value;
		
		if(document.getElementById("uno_dos").checked){
			document.getElementById("x_dos").disabled=true;
			document.getElementById("dos_dos").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_dos").disabled=true;


		}else if(document.getElementById("x_dos").checked){
			document.getElementById("uno_dos").disabled=true;
			document.getElementById("dos_dos").disabled=true;
			eleccion.push(b);
			document.getElementById("x_dos").disabled=true;
		}else{
			document.getElementById("x_dos").disabled=true;
			document.getElementById("uno_dos").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_dos").disabled=true;
		}
	}
	function p3(){
	
		a=document.getElementById("uno_tres").value;
		b=document.getElementById("x_tres").value;
		c=document.getElementById("dos_tres").value;
		
		if(document.getElementById("uno_tres").checked){
			document.getElementById("x_tres").disabled=true;
			document.getElementById("dos_tres").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_tres").disabled=true;


		}else if(document.getElementById("x_tres").checked){
			document.getElementById("uno_tres").disabled=true;
			document.getElementById("dos_tres").disabled=true;
			eleccion.push(b);
			document.getElementById("x_tres").disabled=true;
		}else{
			document.getElementById("x_tres").disabled=true;
			document.getElementById("uno_tres").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_tes").disabled=true;
		}
	}

	function p4(){
	
		a=document.getElementById("uno_cuatro").value;
		b=document.getElementById("x_cuatro").value;
		c=document.getElementById("dos_cuatro").value;
		
		if(document.getElementById("uno_cuatro").checked){
			document.getElementById("x_cuatro").disabled=true;
			document.getElementById("dos_cuatro").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_cuatro").disabled=true;


		}else if(document.getElementById("x_cuatro").checked){
			document.getElementById("uno_cuatro").disabled=true;
			document.getElementById("dos_cuatro").disabled=true;
			eleccion.push(b);
			document.getElementById("x_cuatro").disabled=true;
		}else{
			document.getElementById("x_cuatro").disabled=true;
			document.getElementById("uno_cuatro").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_cuatro").disabled=true;
		}
	}

	function p5(){
	
		a=document.getElementById("uno_cinco").value;
		b=document.getElementById("x_cinco").value;
		c=document.getElementById("dos_cinco").value;
		
		if(document.getElementById("uno_cinco").checked){
			document.getElementById("x_cinco").disabled=true;
			document.getElementById("dos_cinco").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_cinco").disabled=true;


		}else if(document.getElementById("x_cinco").checked){
			document.getElementById("uno_cinco").disabled=true;
			document.getElementById("dos_cinco").disabled=true;
			eleccion.push(b);
			document.getElementById("x_cinco").disabled=true;
		}else{
			document.getElementById("x_cinco").disabled=true;
			document.getElementById("uno_cinco").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_cinco").disabled=true;
		}
	}

	function p6(){
	
		a=document.getElementById("uno_seis").value;
		b=document.getElementById("x_seis").value;
		c=document.getElementById("dos_seis").value;
		
		if(document.getElementById("uno_seis").checked){
			document.getElementById("x_seis").disabled=true;
			document.getElementById("dos_seis").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_seis").disabled=true;


		}else if(document.getElementById("x_seis").checked){
			document.getElementById("uno_seis").disabled=true;
			document.getElementById("dos_seis").disabled=true;
			eleccion.push(b);
			document.getElementById("x_seis").disabled=true;
		}else{
			document.getElementById("x_seis").disabled=true;
			document.getElementById("uno_seis").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_seis").disabled=true;
		}
	}

	function p7(){
	
		a=document.getElementById("uno_siete").value;
		b=document.getElementById("x_siete").value;
		c=document.getElementById("dos_siete").value;
		
		if(document.getElementById("uno_siete").checked){
			document.getElementById("x_siete").disabled=true;
			document.getElementById("dos_siete").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_siete").disabled=true;


		}else if(document.getElementById("x_siete").checked){
			document.getElementById("uno_siete").disabled=true;
			document.getElementById("dos_siete").disabled=true;
			eleccion.push(b);
			document.getElementById("x_siete").disabled=true;
		}else{
			document.getElementById("x_siete").disabled=true;
			document.getElementById("uno_siete").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_siete").disabled=true;
		}
	}

	function p8(){
	
		a=document.getElementById("uno_ocho").value;
		b=document.getElementById("x_ocho").value;
		c=document.getElementById("dos_ocho").value;
		
		if(document.getElementById("uno_ocho").checked){
			document.getElementById("x_ocho").disabled=true;
			document.getElementById("dos_ocho").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_ocho").disabled=true;


		}else if(document.getElementById("x_ocho").checked){
			document.getElementById("uno_ocho").disabled=true;
			document.getElementById("dos_ocho").disabled=true;
			eleccion.push(b);
			document.getElementById("x_ocho").disabled=true;
		}else{
			document.getElementById("x_ocho").disabled=true;
			document.getElementById("uno_ocho").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_ocho").disabled=true;
		}
	}

	function p9(){
	
		a=document.getElementById("uno_nueve").value;
		b=document.getElementById("x_nueve").value;
		c=document.getElementById("dos_nueve").value;
		
		if(document.getElementById("uno_nueve").checked){
			document.getElementById("x_nueve").disabled=true;
			document.getElementById("dos_nueve").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_nueve").disabled=true;


		}else if(document.getElementById("x_nueve").checked){
			document.getElementById("uno_nueve").disabled=true;
			document.getElementById("dos_nueve").disabled=true;
			eleccion.push(b);
			document.getElementById("x_nueve").disabled=true;
		}else{
			document.getElementById("x_nueve").disabled=true;
			document.getElementById("uno_nueve").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_nueve").disabled=true;
		}
	}

	function p10(){
	
		a=document.getElementById("uno_diez").value;
		b=document.getElementById("x_diez").value;
		c=document.getElementById("dos_diez").value;
		
		if(document.getElementById("uno_diez").checked){
			document.getElementById("x_diez").disabled=true;
			document.getElementById("dos_diez").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_diez").disabled=true;


		}else if(document.getElementById("x_diez").checked){
			document.getElementById("uno_diez").disabled=true;
			document.getElementById("dos_diez").disabled=true;
			eleccion.push(b);
			document.getElementById("x_diez").disabled=true;
		}else{
			document.getElementById("x_diez").disabled=true;
			document.getElementById("uno_diez").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_diez").disabled=true;
		}
	}

	function p11(){
	
		a=document.getElementById("uno_once").value;
		b=document.getElementById("x_once").value;
		c=document.getElementById("dos_once").value;
		
		if(document.getElementById("uno_once").checked){
			document.getElementById("x_once").disabled=true;
			document.getElementById("dos_once").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_once").disabled=true;


		}else if(document.getElementById("x_once").checked){
			document.getElementById("uno_once").disabled=true;
			document.getElementById("dos_once").disabled=true;
			eleccion.push(b);
			document.getElementById("x_once").disabled=true;
		}else{
			document.getElementById("x_once").disabled=true;
			document.getElementById("uno_once").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_once").disabled=true;
		}
	}

	function p12(){
	
		a=document.getElementById("uno_doce").value;
		b=document.getElementById("x_doce").value;
		c=document.getElementById("dos_doce").value;
		
		if(document.getElementById("uno_doce").checked){
			document.getElementById("x_doce").disabled=true;
			document.getElementById("dos_doce").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_doce").disabled=true;


		}else if(document.getElementById("x_doce").checked){
			document.getElementById("uno_doce").disabled=true;
			document.getElementById("dos_doce").disabled=true;
			eleccion.push(b);
			document.getElementById("x_doce").disabled=true;
		}else{
			document.getElementById("x_doce").disabled=true;
			document.getElementById("uno_doce").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_doce").disabled=true;
		}
	}

	function p13(){
	
		a=document.getElementById("uno_trece").value;
		b=document.getElementById("x_trece").value;
		c=document.getElementById("dos_trece").value;
		
		if(document.getElementById("uno_trece").checked){
			document.getElementById("x_trece").disabled=true;
			document.getElementById("dos_trece").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_trece").disabled=true;


		}else if(document.getElementById("x_trece").checked){
			document.getElementById("uno_trece").disabled=true;
			document.getElementById("dos_trece").disabled=true;
			eleccion.push(b);
			document.getElementById("x_trece").disabled=true;
		}else{
			document.getElementById("x_trece").disabled=true;
			document.getElementById("uno_trece").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_trece").disabled=true;
		}
	}

	function p14(){
	
		a=document.getElementById("uno_catorce").value;
		b=document.getElementById("x_catorce").value;
		c=document.getElementById("dos_catorce").value;
		
		if(document.getElementById("uno_catorce").checked){
			document.getElementById("x_catorce").disabled=true;
			document.getElementById("dos_catorce").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_catorce").disabled=true;


		}else if(document.getElementById("x_catorce").checked){
			document.getElementById("uno_catorce").disabled=true;
			document.getElementById("dos_catorce").disabled=true;
			eleccion.push(b);
			document.getElementById("x_catorce").disabled=true;
		}else{
			document.getElementById("x_catorce").disabled=true;
			document.getElementById("uno_catorce").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_catorce").disabled=true;
		}
	}

	function p15(){
	
		a=document.getElementById("uno_quince").value;
		b=document.getElementById("x_quince").value;
		c=document.getElementById("dos_quince").value;
		
		if(document.getElementById("uno_quince").checked){
			document.getElementById("x_quince").disabled=true;
			document.getElementById("dos_quince").disabled=true;
			eleccion.push(a);
			document.getElementById("uno_quince").disabled=true;


		}else if(document.getElementById("x_quince").checked){
			document.getElementById("uno_quince").disabled=true;
			document.getElementById("dos_quince").disabled=true;
			eleccion.push(b);
			document.getElementById("x_quince").disabled=true;
		}else{
			document.getElementById("x_quince").disabled=true;
			document.getElementById("uno_quince").disabled=true;
			eleccion.push(c);
			document.getElementById("dos_quince").disabled=true;
		}
	}