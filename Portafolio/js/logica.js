const primerInput = document.getElementById("nombre");
const segundoInput = document.getElementById("apellido");
const tercerInput = document.getElementById("email");
const cuartoInput = document.getElementById("mensaje");
const btn = document.getElementById("btn-Enviar");

btn.addEventListener("click",function(){

    primerInput.value = "";
    segundoInput.value = "";
    tercerInput.value = "";
    cuartoInput.value = "";

    window.alert("Mensaje Enviado");

});