var as = document.getElementsByTagName('a');

var ps = document.getElementsByTagName('p');

console.log(ps)
/*
console.log(as)
var sumaAs = 0;
*/
var penultimo;

var enlacesPru = 0;

for (var i = 0; i < as.length; i++) {
	/*
	sumaAs++;
	console.log(as[i])
	*/
	if (as[i] == "http://prueba/") {
		enlacesPru++;
	}

	if (i == (as.length-1)) {
		penultimo = as[i];
	}
}

alert("numero de enlaces " + as.length);

alert("Penultimo enlace " + penultimo);

alert("Enlaces que dirigen a http://prueba/ :" + enlacesPru);


