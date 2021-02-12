moment.locale('es');

var fechaInicial = document.getElementById("fecha-ini"),
    anosCaducidad = document.getElementById("anos-cad"),
    mesesCaducidad = document.getElementById("meses-cad"),
    divSuspensiones = document.getElementById("div-suspensiones"),
    btnCalcular = document.getElementById("btn-calcular"),
    btnAgregarSus = document.getElementById("btn-suspension"),
    formato = 'LL',
    contSuspensiones = 0;

function agregarSuspension(){
    contSuspensiones += 1;
    let inputSusIni =  document.createElement("input"),
        inputSusFin =  document.createElement("input"),
        spanSusIni = document.createElement("span"),
        spanSusFin = document.createElement("span"),
        br = document.createElement("br");
    
    inputSusIni.setAttribute('type', 'date');
    inputSusFin.setAttribute('type', 'date');
    inputSusIni.id = "sus-ini-" + contSuspensiones;
    inputSusFin.id = "sus-fin-" + contSuspensiones;
    spanSusIni.innerText = "Suspensión Inicio";
    spanSusFin.innerText = "Suspensión Fin";

    divSuspensiones.appendChild(spanSusIni);
    divSuspensiones.appendChild(inputSusIni);
    divSuspensiones.appendChild(spanSusFin);
    divSuspensiones.appendChild(inputSusFin);
    divSuspensiones.appendChild(br);
}

btnAgregarSus.addEventListener("click", function(){
    agregarSuspension();
});

function calcularDiasSuspension(){
    var diasSuspension = 0;
    for (var i = 1; i <= contSuspensiones; i++) {
        let fechaSus1 = document.getElementById("sus-ini-" + i).value,
            fechaSus2 = document.getElementById("sus-fin-" + i).value;
        fechaSus1 = moment(fechaSus1);
        fechaSus2 = moment(fechaSus2);
        diasSuspension += fechaSus2.diff(fechaSus1, 'days');
    }
    calcularFechaFin(diasSuspension);
}

function calcularFechaFin(diasSuspension){
    let fechaIni = moment(fechaInicial.value),
        fechaFin = fechaIni.clone().add(anosCaducidad.value, 'years');
    fechaFin = fechaFin.add(mesesCaducidad.value, 'months');
    fechaFin = fechaFin.add(diasSuspension, 'days');
    alert(fechaFin.format(formato));
}

function calcular(){
    if (contSuspensiones != 0) {
        calcularDiasSuspension();
    } else {
        calcularFechaFin(0);
    }
}

btnCalcular.addEventListener("click", function(){
    calcular();
});
