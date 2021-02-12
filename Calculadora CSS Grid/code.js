var display = document.querySelector(".display"),
    btnC = document.querySelector(".btn-c"),
    btnIgual = document.querySelector(".btn-igual"),
    arrInput = document.querySelectorAll(".input");

function clear() {
    display.children[0].innerText = '';
}

function agregarInput(contenidoBoton){
    if (display.children[0].innerText == '0') {
        clear();
    }
    display.children[0].innerText += contenidoBoton;
}

arrInput.forEach(function(boton){
    boton.addEventListener('click', function(){
        let contenidoBoton = boton.children[0].innerText;
        agregarInput(contenidoBoton);
    })
})

btnC.addEventListener('click', function(){
    clear();
    display.children[0].innerText = '0';
})

function calcular() {
    let operacion = display.children[0].innerText.replace('x','*');
    display.children[0].innerText = eval(operacion);
}

btnIgual.addEventListener('click', function(){
    calcular();
})