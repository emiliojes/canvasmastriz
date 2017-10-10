var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
//var l = 0;
var xi, yi, xf, yf;
var colorcito = "#FAA";

//while(l < lineas)//mientras algo sea verdad va ocurrir algo
for(l = 0; l < lineas; l++)
{
	xi = 10 * l;
	yf = 10 * (l + 1);
	yi = 10 * l;
	xf = 10 * (l + 1);
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


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

