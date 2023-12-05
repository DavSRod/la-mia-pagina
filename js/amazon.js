let calificacion1 = document.getElementById("calificacion1")
let calificacion2 = document.getElementById("calificacion2")
let calificacion3 = document.getElementById("calificacion3")
let calificacion4 = document.getElementById("calificacion4")
let calificacion5 = document.getElementById("calificacion5")
let btnGraficar = document.getElementById("btnGraficar")

btnGraficar.addEventListener("click", function() {
    let sumaCalificacion = Number(calificacion1.value) + Number(calificacion2.value) + Number(calificacion3.value) + Number(calificacion4.value) + Number(calificacion5.value)
/*     alert(sumaCalificacion) */

    let promCalificacion1 = calificacion1.value * 100  / sumaCalificacion
    let promCalificacion2 = calificacion2.value * 100  / sumaCalificacion
    let promCalificacion3 = calificacion3.value * 100  / sumaCalificacion
    let promCalificacion4 = calificacion4.value * 100  / sumaCalificacion
    let promCalificacion5 = calificacion5.value * 100  / sumaCalificacion
    alert(promCalificacion1)
/*     calificacion1.value
    calificacion2.value
    calificacion3.value
    calificacion4.value
    calificacion5.value

    let sumar1 = (calificacion1.value/100)
    alert(sumar1)

    let sumar2 = (calificacion2.value/100)
    alert(sumar2)

    let sumar3 = (calificacion3.value/100)
    alert(sumar3)

    let sumar4 = (calificacion4.value/100)
    alert(sumar4)

    let sumar5 = (calificacion5.value/100)
    alert(sumar5) */
})