// Ejercicio 1
// Crea una funcion sumarPreciosEnDolares que reciba un array de objetos con key precio (en euros).
// 1 euro equivale a 1.1 dolares. Redondea el resultado a 2 decimales.
// Devuelve la suma de todos los precios ya convertidos a dolares, usando reduce.
// Ej: si recibe [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] devuelve 33

function sumarPreciosEnDolares(productsList) {
    const TO_DOLLARS = 1.10

    const newPrices = productsList.reduce((acc, product) => {
        return acc + Number((product.precio * TO_DOLLARS).toFixed(2))
    }, 0)
    return newPrices
}

// Ejercicio 2
// Crea una funcion sumarDistanciasEnKm que reciba un array de objetos con key millas.
// 1 milla equivale a 1.6 km. Redondea el resultado a 2 decimales.
// Devuelve la suma de todas las distancias ya convertidas a kilometros, usando reduce.
// Ej: si recibe [{ name: 'Hike', millas: 10 }, { name: 'Roadtrip', millas: 20 }] devuelve 48

function sumarDistanciasEnKm(distancesList) {
    const TO_MILES = 1.6

    const newDistances = distancesList.reduce((acc, distance) => {
        return acc + Number((distance.millas * TO_MILES).toFixed(2))
    }, 0)
    return newDistances
}

// Ejercicio 3
// Crea una funcion sumarTiempoEnHoras que reciba un array de objetos con key minutos.
// Redondea el resultado a 2 decimales.
// Devuelve la suma de todos los tiempos ya convertidos a horas, usando reduce.
// Ej: si recibe [{ name: 'Movie', minutos: 90 }, { name: 'Workout', minutos: 120 }] devuelve 3.5

function sumarTiempoEnHoras(timesList) {
    const TO_HOURS = 60

    const newTimes = timesList.reduce((acc, time) => {
        return acc + (time.minutos / TO_HOURS)
    }, 0)
    return Number(newTimes.toFixed(2))
}

// Ejercicio 4
// Crea una funcion sumarPesoEnLibras que reciba un array de objetos con key kg.
// 1 kg equivale a 2.2 libras. Redondea el resultado a 2 decimales.
// Devuelve la suma de todos los pesos ya convertidos a libras, usando reduce.
// Ej: si recibe [{ name: 'Suitcase', kg: 10 }, { name: 'Backpack', kg: 20 }] devuelve 66

function sumarPesoEnLibras(weightList) {

    const TO_LIBRAS = 2.2
    const newWeights = weightList.reduce((acc, weight) => {
        return acc + (weight.kg * TO_LIBRAS)
    }, 0)
    return Number(newWeights.toFixed(2))
}

// Ejercicio 5
// Crea una funcion obtenerTemperaturaPromedioEnFahrenheit que reciba un array de objetos con key celsius.
// Redondea el resultado a 2 decimales.
// Devuelve la media de todas las temperaturas ya convertidas a fahrenheit, usando reduce.
// Ej: si recibe [{ name: 'Oslo', celsius: 0 }, { name: 'Dubai', celsius: 100 }] devuelve 122

function obtenerTemperaturaPromedioEnFahrenheit(temperaturesList) {

    const TO_FAHRENHEIT = 9 / 5
    const newTemperatures = temperaturesList.reduce((acc, temperature) => {
        return acc + (temperature.celsius * TO_FAHRENHEIT + 32)
    }, 0)
    return Number((newTemperatures / temperaturesList.length).toFixed(2))
}

// Ejercicio 6
// Crea una funcion sumarPrecioConDescuento que reciba un array de objetos con key precio y un porcentaje de descuento.
// Redondea el resultado a 2 decimales.
// Devuelve la suma de todos los precios ya con el descuento aplicado, usando reduce.
// Ej: si recibe [{ name: 'Shirt', precio: 100 }, { name: 'Pants', precio: 200 }] y 10 devuelve 270

function sumarPrecioConDescuento(productsList, discount) {

    const PERCENTAGE = 100
    const discountRate = discount / PERCENTAGE
    const newPrices = productsList.reduce((acc, product) => {
        return acc + (product.precio - (product.precio * discountRate))
    }, 0)
    return Number(newPrices.toFixed(2))
}

// Ejercicio 7
// Crea una funcion sumarPrecioConIva que reciba un array de objetos con key precio y un porcentaje de IVA.
// Redondea el resultado a 2 decimales.
// Devuelve la suma de todos los precios ya con el IVA aplicado, usando reduce.
// Ej: si recibe [{ name: 'Shirt', precio: 100 }, { name: 'Pants', precio: 200 }] y 21 devuelve 363

function sumarPrecioConIva(productsList, IVA) {

    const PERCENTAGE = 100
    const porcentIVA = IVA / PERCENTAGE
    const newPrices = productsList.reduce((acc, product) => {
        return acc + (product.precio + (product.precio * porcentIVA))
    }, 0)
    return Number(newPrices.toFixed(2))
}

// Ejercicio 8
// Crea una funcion sumarSalarioNeto que reciba un array de objetos con key salarioBruto y un porcentaje de retencion.
// Redondea el resultado a 2 decimales.
// Devuelve la suma de todos los salarios netos, usando reduce.
// Ej: si recibe [{ name: 'Alice', salarioBruto: 1000 }, { name: 'Bob', salarioBruto: 2000 }] y 20 devuelve 2400

function sumarSalarioNeto(salariesList, IRPF) {

    const PERCENTAGE = 100
    const porcentIRPF = IRPF / PERCENTAGE
    const newSalaries = salariesList.reduce((acc, salary) => {
        return acc + (salary.salarioBruto - (salary.salarioBruto * porcentIRPF))
    }, 0)
    return Number(newSalaries.toFixed(2))
}

// Ejercicio 9
// Crea una funcion obtenerPrecioMedio que reciba un array de objetos con key precio
// y devuelva la media de todos los precios, usando reduce. Redondea el resultado a 2 decimales.
// Ej: si recibe [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }, { name: 'Hat', precio: 30 }] devuelve 20

function obtenerPrecioMedio(productsList) {

    const averagePrices = productsList.reduce((acc, product) => {
        return acc + product.precio
    }, 0)
    return Number((averagePrices / productsList.length).toFixed(2))
}

// Ejercicio 10
// Crea una funcion obtenerSalarioMedio que reciba un array de objetos con key salarioBruto
// y devuelva la media de todos los salarios, usando reduce. Redondea el resultado a 2 decimales.
// Ej: si recibe [{ name: 'Alice', salarioBruto: 1000 }, { name: 'Bob', salarioBruto: 2000 }, { name: 'Charlie', salarioBruto: 3000 }] devuelve 2000

function obtenerSalarioMedio(salariesList) {

    const averageSalaries = salariesList.reduce((acc, employee) => {
        return acc + employee.salarioBruto
    }, 0)
    return Number((averageSalaries / salariesList.length).toFixed(2))
}

// Ejercicio 11
// Crea una funcion obtenerResumenDePrecios que reciba un array de objetos con key precio.
// Devuelve un objeto con el total, la media y el precio mas caro, usando un unico reduce.
// Redondea total y media a 2 decimales.
// Ej: si recibe [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }, { name: 'Hat', precio: 30 }] devuelve { total: 60, media: 20, masCaro: 30 }

function obtenerResumenDePrecios(productsList) {

    const newProducts = productsList.reduce((acc, product) => {
        return {
            total: acc.total + product.precio,
            media: Number(((acc.total + product.precio) / productsList.length).toFixed(2)),
            masCaro: acc.masCaro < product.precio ? product.precio : acc.masCaro
        }
    }, { total: 0, masCaro: 0 })

    return newProducts
}

// Ejercicio 12
// Crea una funcion obtenerResumenDeDistancias que reciba un array de objetos con key millas.
// 1 milla equivale a 1.6 km. Devuelve un objeto con el total en km, la media en km y la distancia mas larga en km, usando un unico reduce.
// Redondea totalKm, media y masLarga a 2 decimales.
// Ej: si recibe [{ name: 'Hike', millas: 10 }, { name: 'Roadtrip', millas: 20 }] devuelve { totalKm: 48, media: 24, masLarga: 32 }

function obtenerResumenDeDistancias(distanciesList) {

    const TO_MILLA = 1.6
    const newDistances = distanciesList.reduce((acc, distance) => {
        return {
            totalKm: Number((acc.totalKm + (distance.millas * TO_MILLA)).toFixed(2)),

            media: Number(((acc.totalKm + (distance.millas * TO_MILLA))
                / distanciesList.length).toFixed(2)),

            masLarga: acc.masLarga < (distance.millas * TO_MILLA)
                ? Number((distance.millas * TO_MILLA).toFixed(2)) : acc.masLarga
        }
    }, { totalKm: 0, media: 0, masLarga: 0 })

    return newDistances
}

// Ejercicio 13
// Crea una funcion obtenerResumenDePesos que reciba un array de objetos con key kg.
// 1 kg equivale a 2.2 libras. Devuelve un objeto con el total en libras, la media en libras y el peso mas pesado en libras, usando un unico reduce.
// Redondea totalLibras, media y masPesado a 2 decimales.
// Ej: si recibe [{ name: 'Suitcase', kg: 10 }, { name: 'Backpack', kg: 20 }] devuelve { totalLibras: 66, media: 33, masPesado: 44 }

function obtenerResumenDePesos(weightsList) {

    const TO_LIBRA = 2.2
    const newWeights = weightsList.reduce((acc, weigth) => {
        return {
            totalLibras: Number((acc.totalLibras + (weigth.kg * TO_LIBRA)).toFixed(2)),

            media: Number(((acc.totalLibras + (weigth.kg * TO_LIBRA)) / weightsList.length).toFixed(2)),

            masPesado: acc.masPesado < (weigth.kg * TO_LIBRA)
                ? Number((weigth.kg * TO_LIBRA).toFixed(2)) : acc.masPesado
        }
    }, { totalLibras: 0, media: 0, masPesado: 0 })

    return newWeights
}

// Ejercicio 14
// Crea una funcion obtenerResumenDeSalarios que reciba un array de objetos con key salarioBruto y un porcentaje de retencion.
// Devuelve un objeto con el total bruto, el total neto y la media bruta, usando un unico reduce.
// Redondea totalNeto y media a 2 decimales.
// Ej: si recibe [{ name: 'Alice', salarioBruto: 1000 }, { name: 'Bob', salarioBruto: 2000 }] y 20 devuelve { totalBruto: 3000, totalNeto: 2400, media: 1500 }


function obtenerResumenDeSalarios(employesList, percentage) {

    const TO_DISCOUNT = percentage / 100
    const newSalaries = employesList.reduce((acc, employee) => {
        return {
            totalBruto: acc.totalBruto + employee.salarioBruto,

            totalNeto: Number((acc.totalNeto +
                (employee.salarioBruto - (employee.salarioBruto * TO_DISCOUNT))).toFixed(2)),

            media: Number(((acc.totalBruto + employee.salarioBruto)
                / employesList.length).toFixed(2))

        }
    }, { totalBruto: 0, totalNeto: 0, media: 0 })

    return newSalaries
}

// Ejercicio 15
// Crea una funcion obtenerResumenDeTemperaturas que reciba un array de objetos con key celsius.
// Devuelve un objeto con la media en fahrenheit, la temperatura mas calida y la mas fria en fahrenheit.
// Redondea los 3 valores a 2 decimales.
// Ej: si recibe [{ name: 'Oslo', celsius: 0 }, { name: 'Dubai', celsius: 100 }] devuelve { mediaFahrenheit: 122, masCalida: 212, masFria: 32 }

function obtenerResumenDeTemperaturas(temperaturesList) {

    const TO_FAHRENHEIT = 9 / 5
    const newTemperatures = temperaturesList.reduce((acc, temperature) => {
        return {
            mediaFahrenheit: Number((acc.mediaFahrenheit +
                ((temperature.celsius * TO_FAHRENHEIT) + 32) / temperaturesList.length).toFixed(2)),

            masCalida: acc.masCalida < ((temperature.celsius * TO_FAHRENHEIT) + 32) ?
                Number(((temperature.celsius * TO_FAHRENHEIT) + 32).toFixed(2)) : acc.masCalida,

            masFria: acc.masFria > ((temperature.celsius * TO_FAHRENHEIT) + 32)
                ? Number(((temperature.celsius * TO_FAHRENHEIT) + 32).toFixed(2)) : acc.masFria

        }
    }, { mediaFahrenheit: 0, masCalida: 0, masFria: Infinity })

    return newTemperatures
}