var palabra = "Madera";
var hombre, l, espacio, dibujo;

var dibujar = {};

var tecla =
{
	ENTER: 13
}

//Declaracaion de la clase Ahorcado
var Ahorcado = function(con)
{
	// "this" es la variable locales de la clase, accesibles en toda la clase
	// "this.contexto" es el context de dibujo del canvas, que llega por parametro
	// desde la variable "con"
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}

Ahorcado.prototype.dibujar = function()
{
	var dibujo = this.contexto;

	dibujar.marco = new Image();
  	dibujar.marco.src = "img/marco.png";
  	dibujar.marco.onload = dibujoMarco;
  	function dibujoMarco()
  	{
    	dibujo.drawImage(dibujar.marco, 0, 0);
  	}

	dibujar.poste = new Image();
  	dibujar.poste.src = "img/poste.png";
  	dibujar.poste.onload = dibujoPoste;
  	function dibujoPoste()
  	{
    	dibujo.drawImage(dibujar.poste, 0 , 12);
  	}

	if (this.intentos > 0)
	{
		dibujar.cabeza = new Image();
   		dibujar.cabeza.src = "img/gordion.png";
    	dibujar.cabeza.onload = dibujoCabeza;
    	function dibujoCabeza()
    	{
      		dibujo.drawImage(dibujar.cabeza, 50, 32);
  		}

		if (this.intentos > 1)
		{
			dibujar.tronco = new Image();
		    dibujar.tronco.src = "img/roman_body.png";
		    dibujar.tronco.onload = dibujoTronco;
		    function dibujoTronco()
		    {
		    	dibujo.drawImage(dibujar.tronco, 77, 190);
		    }

			if (this.intentos > 2)
			{
				dibujar.brazoIzquierdo = new Image();
	          	dibujar.brazoIzquierdo.src = "img/roman_brazos.png";
	          	dibujar.brazoIzquierdo.onload = dibujoBrazoIzquierdo;
	          	function dibujoBrazoIzquierdo()
	          	{
	            	dibujo.drawImage(dibujar.brazoIzquierdo, 48, 190);
	        	}

				if (this.intentos > 3)
				{
					dibujar.piernaDerecha = new Image();
		            dibujar.piernaDerecha.src = "img/roman_piernas_2.png";
		            dibujar.piernaDerecha.onload = dibujoPiernaDerecha;
		            function dibujoPiernaDerecha()
		            {
		              dibujo.drawImage(dibujar.piernaDerecha, 79, 274);
		            }

		            if (this.intentos > 4)
					{
						dibujar.piernaDerecha = new Image();
			            dibujar.piernaDerecha.src = "img/x_orion.png";
			            dibujar.piernaDerecha.onload = dibujoPiernaDerecha;
			            function dibujoPiernaDerecha()
			            {
			              dibujo.drawImage(dibujar.piernaDerecha, 67, 82);
			            }
			        }
				}
			}
		}
	}		
}

Ahorcado.prototype.trazar = function()
{
	this.intentos ++;
	if (this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert ("TE VENDIERON. POR CAGON!! (perdiste)");
	}
	this.dibujar();
}

function iniciar ()
{
	palabraAzar();
	l = document.getElementById("letra");
	var b = document.getElementById("boton");

	var canvas = document.getElementById("c");
	canvas.width = 350;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	
	// String funcion "toUpperCase o toLowerCase" convierte el texto en
	//mayuscula o minuscula
	// palabra = palabra.toUpperCase();
	// palabra = palabra.toLowerCase();
	// (palabra.lengh) para saber la cantidad de espacio de una palabra
	palabra = palabra.toUpperCase();

	//Declaro un array con n espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);

	//Agregamos una funcion que dispare al dar click al boton
	b.addEventListener("click", agregarLetra);

	document.addEventListener("keydown", teclado);

	mostrarPista(espacio);
}

function teclado(datos)
{
	var codigo = datos.keyCode;

	if(codigo == tecla.ENTER)
		{
			agregarLetra();
		}
}

function agregarLetra()
{
	var letra = l.value;
	mostrarPalabra(palabra, hombre, letra);

	var escogidas = document.getElementById("escogidas");
	l.value = "";

    if(letra.length == 1)
    {
    escogidas.innerText += letra.toUpperCase() + "\n";
    }
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p, ganastes;
	letra = letra.toUpperCase();

	for (p in palabra)
	{
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);

	//Si no lo encontre
	if(!encontrado)
	{
		ahorcado.trazar();
	}

	if(!ahorcado.vivo)
	{
		//Mostrar palabra entera
		alert(palabra);
	}

	
}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;

	for(i = 0; i < largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto += espacio[i] + " ";
		}
			else
			{
				texto += "_ ";
			}
	}
	pista.innerText = texto;
}

function palabraAzar(){
    var azar = ["SALILE","ACHICA","REFERENTE","PECHO","FREEZER","GORDION","VENDIDO"];
    var numero = Math.floor(Math.random()*(azar.length-0+1)+0);
    palabra = azar[numero];
}


//--------------------------------------------------------------

// var palabra = "Tamarindo";
// var hombre;

// //Declaracaion de la clase Ahorcado
// var Ahorcado = function(con)
// {
// 	// "this" es la variable locales de la clase, accesibles en toda la clase
// 	// "this.contexto" es el context de dibujo del canvas, que llega por parametro
// 	// desde la variable "con"
// 	this.contexto = con;
// 	this.maximo = 5;
// 	this.intentos = 0;
// 	this.vivo = true;

// 	this.dibujar();
// }

// Ahorcado.prototype.dibujar = function()
// {
// 	var dibujo = this.contexto;

// 	//inicio dibujo poste
// 	dibujo.beginPath();

// 	//posiciona el cursor imaginario en el punto de partida para dibujar
// 	dibujo.moveTo (150,100);

// 	//comienza a dibujar
// 	dibujo.lineTo (150,50);
// 	dibujo.lineTo (400,50);
// 	dibujo.lineTo (400,350);

// 	//atributos
// 	dibujo.strokeStyle = "#000";
// 	dibujo.lineWidth = 10;

// 	//para cerrar el dibujo
// 	dibujo.stroke ();
// 	dibujo.closePath();

// 	if (this.intentos > 0)
// 	{
// 		//intentos = 1 --> rostro
// 		dibujo.beginPath();

// 		dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
// 		dibujo.strokeStyle = "red";
// 		dibujo.lineWidth = 5;

// 		dibujo.stroke();
// 		dibujo.closePath();

// 		if (this.intentos > 1)
// 		{
// 			//intentos = 2 --> torzo
// 			dibujo.beginPath();

// 			dibujo.moveTo (150,180);
// 			dibujo.lineTo (150,250);

// 			dibujo.strokeStyle = "red";
// 			dibujo.lineWidth = 5;

// 			dibujo.stroke();
// 			dibujo.closePath();

// 			if (this.intentos > 2)
// 			{
// 				//intentos = 3 --> brazos
// 				dibujo.beginPath();

// 				dibujo.moveTo (120,220);
// 				dibujo.lineTo (150,180);
// 				dibujo.lineTo (180,220);

// 				dibujo.strokeStyle = "red";
// 				dibujo.lineWidth = 5;

// 				dibujo.stroke();
// 				dibujo.closePath();

// 				if (this.intentos > 3)
// 				{
// 					//intentos = 4 --> piernas
// 					dibujo.beginPath();

// 					dibujo.moveTo (120,290);
// 					dibujo.lineTo (150,250);
// 					dibujo.lineTo (180,290);

// 					dibujo.strokeStyle = "red";
// 					dibujo.lineWidth = 5;

// 					dibujo.stroke();
// 					dibujo.closePath();

// 					if (this.intentos > 4)
// 					{
// 						//intentos = 5 --> ojos muertos
// 						dibujo.beginPath();

// 						//ojo izquierdo
// 						dibujo.moveTo (125,120);
// 						dibujo.lineTo (145,145);
// 						dibujo.moveTo (145,120);
// 						dibujo.lineTo (125,145);

// 						dibujo.strokeStyle = "black";
// 						dibujo.lineWidth = 5;

// 						//ojo derecho
// 						dibujo.moveTo (155,120);
// 						dibujo.lineTo (175,145);
// 						dibujo.moveTo (175,120);
// 						dibujo.lineTo (155,145);

// 						dibujo.strokeStyle = "black";
// 						dibujo.lineWidth = 5;

// 						dibujo.stroke();
// 						dibujo.closePath();
// 					}
// 				}
// 			}
// 		}
// 	}		
// }

// Ahorcado.prototype.trazar = function()
// {
// 	this.intentos ++;
// 	if (this.intentos >= this.maximo)
// 	{
// 		this.vivo = false;
// 	}
// 	this.dibujar();
// }

// function iniciar ()
// {
// 	var canvas = document.getElementById("c");
// 	canvas.width = 500;
// 	canvas.height = 400;
// 	var contexto = canvas.getContext("2d");
// 	hombre = new Ahorcado(contexto);
// 	hombre.trazar();
// 	hombre.trazar();
// 	hombre.trazar();
// 	hombre.trazar();
// 	hombre.trazar();
// }




