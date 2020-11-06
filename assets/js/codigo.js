function ocultarContenido(contenido, enlace) {
	
	var contenidox = document.getElementById(contenido);

	if (contenidox.style.display != "none") {

		contenidox.style.display = "none";
		enlace.innerHTML = "Mostrar contenidos";
	}
	else{
		contenidox.style.display = "block";
		enlace.innerHTML = "Ocultar contenidos";
	}
}
