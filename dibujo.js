var texto = document.getElementById("texto_lineas");
var raton = document.getElementById("ratoncito");
raton.addEventListener("click", dibujoporClick);

var d = document.getElementById("dibujito");
//var ancho = 300;
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoporClick()
{
	//var x = parseInt(texto.value);
	var lineas = parseInt(texto.value);
	//var l = 0;
	var xi, yi, xf, yf;
	var colorcito = "#FAA";
	var espacio = ancho / lineas;

//while(l < lineas)//mientras algo sea verdad va ocurrir algo
for(l = 0; l < lineas; l++)
{
	xi = espacio * l;
	yf = espacio * (l + 1);
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	dibujarLinea(colorcito, xi, 0, 300, yf);
	console.log("linea " + xi); 
//	l++;
}
dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 0, 0, 300, 0);
dibujarLinea(colorcito, 0, 0, 300, 0);
dibujarLinea(colorcito, 300, 0, 300, 300);

}
