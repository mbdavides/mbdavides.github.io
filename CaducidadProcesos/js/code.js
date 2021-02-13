moment.locale('es');

var fechaInicial = document.getElementById("fecha-ini"),
    anosCaducidad = document.getElementById("anos-cad"),
    mesesCaducidad = document.getElementById("meses-cad"),
    divSuspensiones = document.getElementById("div-suspensiones"),
    btnCalcular = document.getElementById("btn-calcular"),
    btnAgregarSus = document.getElementById("btn-suspension"),
    spanRespuesta = document.getElementById("span-respuesta"),
    formato = 'LL';

function agregarSuspension(){
    let divSuspension = document.createElement("div"),
        spanSusIni = document.createElement("span"),
        spanSusFin = document.createElement("span"),
        inputSusIni =  document.createElement("input"),
        inputSusFin =  document.createElement("input"),
        cerrarSus = document.createElement("button"),
        br = document.createElement("br");
    
    inputSusIni.setAttribute('type', 'date');
    inputSusFin.setAttribute('type', 'date');
    inputSusIni.className = "sus-ini";
    inputSusFin.className = "sus-fin";
    spanSusIni.innerText = "Suspensión Inicio";
    spanSusFin.innerText = "Suspensión Fin";
    cerrarSus.innerText = "x";

    divSuspension.appendChild(spanSusIni);
    divSuspension.appendChild(inputSusIni);
    divSuspension.appendChild(spanSusFin);
    divSuspension.appendChild(inputSusFin);
    divSuspension.appendChild(cerrarSus);
    divSuspension.appendChild(br);
    divSuspensiones.appendChild(divSuspension);

    cerrarSus.addEventListener("click", function(){
        divSuspension.remove();
    });
}

btnAgregarSus.addEventListener("click", function(){
    agregarSuspension();
});

function calcularDiasSuspension(){
    var diasSuspension = 0,
        arrSusIni = document.querySelectorAll(".sus-ini"),
        arrSusFin = document.querySelectorAll(".sus-fin");
    
    arrSusIni.forEach(function(element, index){
        let fechaSus1 = moment(element.value),
            fechaSus2 = moment(arrSusFin[index].value);
        diasSuspension += fechaSus2.diff(fechaSus1, 'days');
    });
    calcularFechaFin(diasSuspension);
}

function calcularFechaFin(diasSuspension){
    let fechaIni = moment(fechaInicial.value),
        fechaFin = fechaIni.clone().add(anosCaducidad.value, 'years');
    fechaFin = fechaFin.add(mesesCaducidad.value, 'months');
    fechaFin = fechaFin.add(diasSuspension, 'days');
    spanRespuesta.innerText = "Fecha Final del Proceso: " + fechaFin.format(formato);
}

function calcular(){
    if (divSuspensiones.childElementCount > 0)
        calcularDiasSuspension();
    else
        calcularFechaFin(0);
}

btnCalcular.addEventListener("click", function(){
    calcular();
});
