// Ejercicio 1
// Crea una funcion buscarPrimerProductoCaroEnDolares que reciba un array de objetos con key precio (en euros)
// y un limite en dolares. 1 euro equivale a 1.1 dolares.
// Devuelve el primer producto cuyo precio en dolares es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }, { name: 'Hat', precio: 30 }] y 15 devuelve { name: 'Pants', precio: 20 }

const TO_DOLLARS = 1.1

function buscarPrimerProductoCaroEnDolares(objectsList, limit) {

    const highestPrice = objectsList.find((object) => {

        return (object.precio * TO_DOLLARS) > limit
    })
    return highestPrice
}

// Ejercicio 2
// Crea una funcion buscarPrimerProductoBaratoEnDolares que reciba un array de objetos con key precio (en euros)
// y un limite en dolares. 1 euro equivale a 1.1 dolares.
// Devuelve el primer producto cuyo precio en dolares es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] y 15 devuelve { name: 'Shirt', precio: 10 }

const TO_DOLLARS = 1.1

function buscarPrimerProductoBaratoEnDolares(objectsList, limit) {

    const lowestPrice = objectsList.find((object) => {

        return (object.precio * TO_DOLLARS) < limit
    })
    return lowestPrice
}

// Ejercicio 3
// Crea una funcion buscarPrimeraDistanciaLarga que reciba un array de objetos con key millas
// y un limite en kilometros. 1 milla equivale a 1.6 km.
// Devuelve la primera ruta cuya distancia en km es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Hike', millas: 10 }, { name: 'Roadtrip', millas: 20 }] y 15 devuelve { name: 'Hike', millas: 10 }

const TO_KILOMETERS = 1.6

function buscarPrimeraDistanciaLarga(objectsList, limit) {

    const greatestDistance = objectsList.find((object) => {

        return (object.millas * TO_KILOMETERS) > limit
    })
    return greatestDistance
}

// Ejercicio 4
// Crea una funcion buscarPrimeraDistanciaCorta que reciba un array de objetos con key millas
// y un limite en kilometros. 1 milla equivale a 1.6 km.
// Devuelve la primera ruta cuya distancia en km es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Errand', millas: 2 }, { name: 'Roadtrip', millas: 20 }] y 15 devuelve { name: 'Errand', millas: 2 }

const TO_KILOMETERS = 1.6

function buscarPrimeraDistanciaCorta(objectsList, limit) {

    const shortestDistance = objectsList.find((object) => {

        return (object.millas * TO_KILOMETERS) < limit
    })
    return shortestDistance
}

// Ejercicio 5
// Crea una funcion buscarPrimerTiempoLargo que reciba un array de objetos con key minutos
// y un limite en horas.
// Devuelve la primera actividad cuyo tiempo en horas es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Commute', minutos: 20 }, { name: 'Movie', minutos: 90 }] y 1 devuelve { name: 'Movie', minutos: 90 }

const TO_HOURS = 60

function buscarPrimerTiempoLargo(objectsList, limit) {

    const longerDuration = objectsList.find((object) => {

        return (object.minutos / TO_HOURS) > limit
    })
    return longerDuration
}

// Ejercicio 6
// Crea una funcion buscarPrimerTiempoCorto que reciba un array de objetos con key minutos
// y un limite en horas.
// Devuelve la primera actividad cuyo tiempo en horas es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Commute', minutos: 20 }, { name: 'Movie', minutos: 90 }] y 1 devuelve { name: 'Commute', minutos: 20 }

const TO_HOURS = 60

function buscarPrimerTiempoCorto(objectsList, limit) {

    const shorterDuration = objectsList.find((object) => {

        return (object.minutos / TO_HOURS) < limit
    })
    return shorterDuration
}

// Ejercicio 7
// Crea una funcion buscarPrimerPesoPesado que reciba un array de objetos con key kg
// y un limite en libras. 1 kg equivale a 2.2 libras.
// Devuelve el primer objeto cuyo peso en libras es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Box', kg: 5 }, { name: 'Crate', kg: 50 }] y 20 devuelve { name: 'Crate', kg: 50 }

const TO_POUNDS = 2.2

function buscarPrimerPesoPesado(objectsList, limit) {

    const greaterWeight = objectsList.find((object) => {

        return (object.kg * TO_POUNDS) > limit
    })
    return greaterWeight
}

// Ejercicio 8
// Crea una funcion buscarPrimerPesoLigero que reciba un array de objetos con key kg
// y un limite en libras. 1 kg equivale a 2.2 libras.
// Devuelve el primer objeto cuyo peso en libras es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Box', kg: 5 }, { name: 'Crate', kg: 50 }] y 20 devuelve { name: 'Box', kg: 5 }

const TO_POUNDS = 2.2

function buscarPrimerPesoLigero(objectsList, limit) {

    const lowerWeight = objectsList.find((object) => {

        return (object.kg * TO_POUNDS) < limit
    })
    return lowerWeight
}

// Ejercicio 9
// Crea una funcion buscarPrimeraTemperaturaCaliente que reciba un array de objetos con key celsius
// y un limite en fahrenheit.
// Devuelve la primera ciudad cuya temperatura en fahrenheit es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Oslo', celsius: 0 }, { name: 'Dubai', celsius: 40 }] y 90 devuelve { name: 'Dubai', celsius: 40 }

const CELSIUS_FACTOR = 9 / 5
const FAHRENHEIT_OFFSET = 32

function buscarPrimeraTemperaturaCaliente(objectsList, limit) {

    const higherTemperature = objectsList.find((object) => {

        return ((object.celsius * CELSIUS_FACTOR) + FAHRENHEIT_OFFSET) > limit
    })
    return higherTemperature
}

// Ejercicio 10
// Crea una funcion buscarPrimeraTemperaturaFria que reciba un array de objetos con key celsius
// y un limite en fahrenheit.
// Devuelve la primera ciudad cuya temperatura en fahrenheit es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Oslo', celsius: 0 }, { name: 'Dubai', celsius: 40 }] y 90 devuelve { name: 'Oslo', celsius: 0 }

const CELSIUS_FACTOR = 9 / 5
const FAHRENHEIT_OFFSET = 32

function buscarPrimeraTemperaturaFria(objectsList, limit) {

    const lowerTemperature = objectsList.find((object) => {

        return ((object.celsius * CELSIUS_FACTOR) + FAHRENHEIT_OFFSET) < limit
    })
    return lowerTemperature
}

// Ejercicio 11
// Crea una funcion buscarPrimerProductoConDescuentoBarato que reciba un array de objetos con key precio,
// un porcentaje de descuento y un limite.
// Devuelve el primer producto cuyo precio con descuento es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Shirt', precio: 100 }, { name: 'Pants', precio: 200 }], 10 y 95 devuelve { name: 'Shirt', precio: 100 }

const totalPercentage = 100

function buscarPrimerProductoConDescuentoBarato(objectsList, discount, limit) {

    const cheapestProduct = objectsList.find((object) => {

        const discountPrice = (object.precio * discount) / totalPercentage

        return (object.precio - discountPrice) < limit
    })
    return cheapestProduct
}

// Ejercicio 12
// Crea una funcion buscarPrimerProductoConIvaCaro que reciba un array de objetos con key precio,
// un porcentaje de IVA y un limite.
// Devuelve el primer producto cuyo precio con IVA es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Shirt', precio: 100 }, { name: 'Pants', precio: 200 }], 21 y 110 devuelve { name: 'Shirt', precio: 100 }

const totalPercentage = 100

function buscarPrimerProductoConIvaCaro(objectsList, IVA, limit) {

    const mostExpensiveProduct = objectsList.find((object) => {

        const ivaAmount = (object.precio * IVA) / totalPercentage

        return (object.precio + ivaAmount) > limit
    })
    return mostExpensiveProduct
}

// Ejercicio 13
// Crea una funcion buscarPrimerSalarioNetoAlto que reciba un array de objetos con key salarioBruto,
// un porcentaje de retencion y un limite.
// Devuelve el primer empleado cuyo salario neto es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Alice', salarioBruto: 1000 }, { name: 'Bob', salarioBruto: 2000 }], 20 y 1500 devuelve { name: 'Bob', salarioBruto: 2000 }

const totalPercentage = 100

function buscarPrimerSalarioNetoAlto(objectsList, percentage, limit) {

    const netSalary = objectsList.find((object) => {

        const retentionOfSalary = (object.salarioBruto * percentage) / totalPercentage

        return (object.salarioBruto - retentionOfSalary) > limit
    })
    return netSalary
}

// Ejercicio 14
// Crea una funcion buscarPrimeraVelocidadRapida que reciba un array de objetos con key ms (metros por segundo)
// y un limite en km/h.
// Devuelve el primer vehiculo cuya velocidad en km/h es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Bike1', ms: 5 }, { name: 'Car1', ms: 20 }] y 50 devuelve { name: 'Car1', ms: 20 }

const MS_TO_KMH = 3.6

function buscarPrimeraVelocidadRapida(objectsList, limit) {

    const vehicleAtHigherSpeed = objectsList.find((object) => {

        return (object.ms * MS_TO_KMH) > limit
    })
    return vehicleAtHigherSpeed
}

// Ejercicio 15
// Crea una funcion buscarPrimerMayorDeEdadEnMeses que reciba un array de objetos con key edad (en anios)
// y un limite en meses.
// Devuelve la primera persona cuya edad en meses es mayor o igual que el limite, usando find.
// Ej: si recibe [{ name: 'Mia', edad: 1 }, { name: 'Leo', edad: 20 }] y 216 devuelve { name: 'Leo', edad: 20 }

const TO_MONTHS = 12

function buscarPrimerMayorDeEdadEnMeses(objectsList, limit) {

    const TO_MONTHS = 12

    const firstPersonMeetingLimit = objectsList.find((object) => {

        return (object.edad * TO_MONTHS) >= limit
    })
    return firstPersonMeetingLimit
}