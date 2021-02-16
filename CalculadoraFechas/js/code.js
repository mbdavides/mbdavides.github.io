moment.locale('es');

var fecha1 = document.getElementById("fecha1"),
    fecha2 = document.getElementById("fecha2"),
    btnCalcular1 = document.getElementById("btn-calcular1"),
    divRespuesta1 = document.getElementById("div-respuesta1"),
    spanRes1 = document.getElementById("span-res1"),
    spanRes2 = document.getElementById("span-res2"),
    fechaIni = document.getElementById("fecha-ini"),
    anos = document.getElementById("anos"),
    meses = document.getElementById("meses"),
    dias = document.getElementById("dias"),
    btnCalcular2 = document.getElementById("btn-calcular2"),
    divRespuesta2 = document.getElementById("div-respuesta2"),
    spanRes3 = document.getElementById("span-res3"),
    formato = 'LL';

function calcularDifFechas() {
    divRespuesta1.style.display = "flex";
    let fechaUno = moment(fecha1.value),
        fechaDos = moment(fecha2.value),
        diasDif = fechaDos.diff(fechaUno, 'days'),
        mesesDif = fechaDos.diff(fechaUno, 'months'),
        anosDif = fechaDos.diff(fechaUno, 'years'),
        moduloMeses = mesesDif % 12,
        diasRestantes = fechaUno.add(anosDif, "years");

    diasRestantes = diasRestantes.add(moduloMeses, "months");
    diasRestantes = fechaDos.diff(diasRestantes, 'days');

    spanRes1.innerHTML = "<b>Días totales: </b>" + diasDif;
    spanRes2.innerHTML = "<b>En Formato:</b> " + anosDif + " años " + moduloMeses + " meses " + diasRestantes + " días";
}

btnCalcular1.addEventListener("click", function(){
    calcularDifFechas();
});

function calcularFechaMasTiempo(){
    divRespuesta2.style.display = "flex";
    let fechaInicial = moment(fechaIni.value),
        fechaFin = fechaInicial.clone().add(anos.value, 'years');
    fechaFin = fechaFin.add(meses.value, 'months');
    fechaFin = fechaFin.add(dias.value, 'days');

    spanRes3.innerHTML = "<b>Fecha Resultante: </b>" + fechaFin.format(formato);
}

btnCalcular2.addEventListener("click", function(){
    calcularFechaMasTiempo();
});