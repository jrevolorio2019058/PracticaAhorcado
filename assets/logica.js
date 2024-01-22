let valorPantalla = '';

function limpiarPantalla(){

    valorPantalla = '';
    actualizarPantalla();

}

function agregarCaracter(char){

    valorPantalla += char;
    actualizarPantalla();

}

function calcular(){

    try{

        if (valorPantalla.includes('/0')) {

            valorPantalla = "Error, No se puede dividir entre cero"

            actualizarPantalla();
            
        } else {

            valorPantalla = eval(valorPantalla).toString();

            actualizarPantalla();
            
        }

    }catch(e){
        valorPantalla = 'Error!'
        actualizarPantalla();

    }

}

function actualizarPantalla(){

    document.getElementById('pantalla').value = valorPantalla;

}