function mostrarInformacion() {
	alert("Reunidos después de 7 años separados")
}

let docTitle = document.title;
window.addEventListener("blur", () =>{
	document.title = "Oye sigo aquí :(";
})
window.addEventListener("focus", () => {
	document.title = docTitle;
})

function darAviso(){
	alert("Bienvenidos a la FanPage de Big Time Rush.")
}
