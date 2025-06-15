function mostrarPregunta(){
	let respuesta = confirm("¿Te gusta la pizza de esa forma?");
	if (respuesta){
		alert("Que bien! A mí también me parece perfecta.");
	} else{
		let razon = prompt("No? Por qué no te gusta así?");
		if (razon !== null){
			alert("Ya veo, pues a mí me parece perfecta.")
		}
	}
}