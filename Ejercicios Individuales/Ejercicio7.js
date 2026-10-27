let nombres = ["Rodri", "Alvar", "Mamá", "Papá"];

function mostrar(nombres) {
  let resultado = " ";
  for (let i = 0; i < nombres.length; i++) {
    resultado += nombres[i] + "<br>";
  }
  return resultado;
}
document.getElementById("resultado").innerHTML =
  "<ul>" + "<li>" + mostrar(nombres) + "</li>" + "</ul>";
