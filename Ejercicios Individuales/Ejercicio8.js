let ancho = innerWidth;
let alto = innerHeight;

function tamaño(){
    let resultado = " ";
    if(ancho < 600){
        resultado = "menos de 600px";
    } else if(ancho >= 600 && ancho <= 1024){
        resultado = "entre 600px y 1024px";
    } else {
        resultado = "más de 1024px";
    }
    return resultado;
}

document.getElementById("resultado").innerHTML=
"<h2>El ancho es de: " + ancho +"</h2>"+
"<h2>El alto es de: " + alto +"</h2>"+
"<h2>La pagina tiene "+ tamaño(ancho) +"</h2>"
