let abrir = confirm("¿Deseas abrir una pagina en blanco?");
let fecha = new Date();

if(abrir){
    window.open("", "_blank");
    document.write("<p>Fecha actual: " + fecha + "</p>");
    let cerrar = confirm("¿Deseas cerrar  la página?");
    if(cerrar){
        window.close();
    }
}

