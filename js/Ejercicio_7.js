//OBTENER Y ESCRIBIR LA FECHA
function escribe(texto){
	document.getElementById("set_day").innerHTML=texto;
};

function ponfecha(){
	var d = new Date(); 
	var weekDay = d.getDay();
	var week = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
	var mes = d.getMonth();

	var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var texto_mes = meses[mes];

	var dia = d.getDate();
	var anno = d.getUTCFullYear();

	escribe("Hoy es <b>"+ week[weekDay] + " " + dia + " de " + texto_mes + " de " + anno + "</b>");
};

//OBTENER Y ESCRIBIR LA HORA
function write(tiempo){
	document.getElementById("set_time").innerHTML=tiempo;
};

function ponhora(){
	var d = new Date();

	var hora = d.getHours();
	var minutos = d.getMinutes();
	var segundos = d.getSeconds();

	write("<h1>" + hora + ":" + minutos + ":" + segundos+"<h1>");
	t=setTimeout (function(){
		ponhora()
	},500);
};
