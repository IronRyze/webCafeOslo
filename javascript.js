
/* id del enlace que despliega el menú */
var lanzador = "#enlacemenu";

/* id del menú que será desplegado */
var desplegable = "#menu";

/* clase (sin el punto) que muestra el menú */
var despliegaClase = "menudesplegado";
		
/* declaramos las funciones */
function nav(){
	var lanz = document.querySelector(lanzador);	
	lanz.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector(desplegable);
	despl.classList.toggle(despliegaClase);
}

document.querySelector("html").classList.add("js");

nav(); 