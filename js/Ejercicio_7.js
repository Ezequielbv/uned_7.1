// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto){
	document.getElementById("cuadro_txt_date").innerHTML=texto;
}

function ponfecha(){
	var d = new Date(); //obtiene tipo: Mon Mar 27 2017 19:07:38 GTM+0300
	var dia_semana = d.getDay(); //obtiene un número del array: [0] = domingo

	//definimos los textos para el array:
	var semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
	//obtenido el número del array en dia_semana, le asignamos un texto:
	var texto_dia_semana = semana[dia_semana];

	var mes = d.getMonth(); //obtiene un número del array: [0] = enero
	//definimos los textos para el array
	var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var texto_mes = meses[mes];

	//con getDate se obtiene el día de la semana
	var dia = d.getDate();
	//con getUTCFullYear se obtiene el año
	var anno = d.getUTCFullYear();


	escribe("Hoy es <b>"+ texto_dia_semana+" "+dia +" de "+ texto_mes + " de " + anno+"</b>");
}

function escribe(texto){
	document.getElementById("cuadro_txt_time").innerHTML=texto;
}

// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto){
	document.getElementById("cuadro_texto").innerHTML=texto;
}

function ponhora(){
	var d = new Date();

	var hora = d.getHours();
	var minutos = d.getMinutes();
	var segundos = d.getSeconds();

	escribe("<h1>" + hora + ":" + minutos + ":" + segundos+"<h1>");
	t=setTimeout (function(){
		ponhora()
	},500);
}
