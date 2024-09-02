document.getElementById("puntos").innerHTML = localStorage.getItem("contador")

function correcta(siguiente){
    var contador = localStorage.getItem("contador")
    contador++
    localStorage.setItem("contador", contador);
    window.location.href= siguiente;
}
function incorrecta(siguiente){
    alert("Incorrecto")
    window.location.href= siguiente;
}