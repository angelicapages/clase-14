//EJERCICIO 17
const obtenerCompetencia = (primerOponente, segundoOponente) => {
    let enfrentados = primerOponente + " "+ "vrs" + " " + segundoOponente
    return enfrentados
}

alert (obtenerCompetencia ("plantas", "zombies"))
alert (obtenerCompetencia ("locos", "cocos"))

//EJERCICIO 18
const generarEmail = (usuario, dominio) => {
    let elEmail = usuario + "@" + dominio +".com"
    return elEmail
}

alert (generarEmail("pepo", "gmail"))

//EJERCICIO 19
const calcularPuntaje = (primerEjercicio, segundoEjercicio,tercerEjercicio) => {
    let ejercicios = "Fácil:" + " " + primerEjercicio + " " + "Normal:" + " " + segundoEjercicio + " " + "Difícil:" + " " + tercerEjercicio
    return ejercicios
}

alert (caulcularPuntaje ())