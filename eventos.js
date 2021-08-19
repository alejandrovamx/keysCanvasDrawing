var teclas= {
	UP: 38, 
	DOWN: 40, 
	LEFT: 37, 
	RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var micolorhtml = document.getElementById("colorfacha");

//Variables para recordar el punto inicial
var x = 300; 
var y = 300;


//dibujarLinea("red", 299, 299, 301, 301, papel);


//funcion dibujo
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();

}

//Bordes del canvas
dibujarLinea("black",1,1,1,599,papel);
dibujarLinea("black",599,1,1,1,papel);
dibujarLinea("black",599,1,599,599,papel);
dibujarLinea("black",1,599,599,599,papel);


//funcion dibujar con las flechas
function dibujarTeclado(evento)
{
	var colorLinea = micolorhtml.value;
	var movimiento = 10;

	var boton = document.getElementById("elboton");
	boton.addEventListener("click", limpiarCanvas);

//Codigo usado previo al switch
//if(evento.keyCode == teclas.UP){
//	console.log("Pa arriba pai")
//	dibujarLinea(colorLinea, x, y, x, y - movimiento, papel);
//	y = y - movimiento;
//}

	switch(evento.keyCode)
	{
		case teclas.UP:
		dibujarLinea(colorLinea, x, y, x, y - movimiento, papel);
		y = y - movimiento;
		break;

		case teclas.DOWN: 
		dibujarLinea(colorLinea, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;

		case teclas.LEFT:
		//console.log("Pa la izquieda pai");
		dibujarLinea(colorLinea, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;

		case teclas.RIGHT:
		//console.log("Pa la derecha pai");
		dibujarLinea(colorLinea, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;


		default:
		//console.log("Otra tecla pai");
		break;
	}

//funcion limpiar el canvas
function limpiarCanvas()
{
	papel.clearRect(3,3,595,595);
}
//Hacer que despues de ejecutarse la funcion limpiarCanvas regrese al centro

}


console.log("Desarrollado por 1,13,6,11,1,16,4,21,18");