// 1. Pedimos el nombre primero
let nombre = prompt("Introduce tu nombre:");

// Comprobamos que el usuario introdujo un nombre y no pulsó "Cancelar"
if (nombre) {
    // 2. Abrimos la nueva ventana
    let ventana = window.open("", "_blank");

    // 3. Escribimos el contenido en el cuerpo de la nueva ventana
    if (ventana) {
        ventana.document.body.innerHTML = "<h1>Hola " + nombre + "</h1>";
    }
}