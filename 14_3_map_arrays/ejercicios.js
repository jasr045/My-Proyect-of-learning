// Ejercicio 1
// Crea una funcion anadirPrecioEnDolares que reciba un array de objetos con key precio (en euros).
// 1 euro equivale a 1.1 dolares. Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key precioDolares.
// Ej: si recibe [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] devuelve [{ name: 'Shirt', precio: 10, precioDolares: 11 }, { name: 'Pants', precio: 20, precioDolares: 22 }]

function anadirPrecioEnDolares(pricesList) {
    const TO_DOLLARS = 1.10
    const newList = pricesList.map((product) => {
        return {
            name: product.name,
            precio: product.precio,
            precioDolares: Number((product.precio * TO_DOLLARS).toFixed(2))
        }
    })
    return newList
}

// Ejercicio 2
// Crea una funcion anadirDistanciaEnKm que reciba un array de objetos con key millas.
// 1 milla equivale a 1.6 km. Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key km.
// Ej: si recibe [{ name: 'Hike', millas: 10 }, { name: 'Roadtrip', millas: 20 }] devuelve [{ name: 'Hike', millas: 10, km: 16 }, { name: 'Roadtrip', millas: 20, km: 32 }]

function anadirDistanciaEnKm(distancesList) {
    const TO_MILES = 1.60

    const newDistances = distancesList.map((distance) => {
        return {
            name: distance.name,
            millas: distance.millas,
            km: Number((distance.millas * TO_MILES).toFixed(2))
        }
    })

    return newDistances
}

// Ejercicio 3
// Crea una funcion anadirTiempoEnHoras que reciba un array de objetos con key minutos.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key horas.
// Ej: si recibe [{ name: 'Movie', minutos: 90 }, { name: 'Workout', minutos: 120 }] devuelve [{ name: 'Movie', minutos: 90, horas: 1.5 }, { name: 'Workout', minutos: 120, horas: 2 }]

function anadirTiempoEnHoras(moviesList) {
    const TO_HOURS = 60
    const movieRuntimes = moviesList.map((movie) => {
        return {
            name: movie.name,
            minutos: movie.minutos,
            horas: Number((movie.minutos / TO_HOURS).toFixed(2))
        }
    })
    return movieRuntimes
}

// Ejercicio 4
// Crea una funcion anadirPesoEnLibras que reciba un array de objetos con key kg.
// 1 kg equivale a 2.2 libras. Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key libras.
// Ej: si recibe [{ name: 'Suitcase', kg: 10 }, { name: 'Backpack', kg: 20 }] devuelve [{ name: 'Suitcase', kg: 10, libras: 22 }, { name: 'Backpack', kg: 20, libras: 44 }]

function anadirPesoEnLibras(productsList) {
    const TO_POUND = 2.20
    const newList = productsList.map((product) => {
        return {
            name: product.name,
            kg: product.kg,
            libras: Number((product.kg * TO_POUND).toFixed(2))
        }
    })
    return newList
}

// Ejercicio 5
// Crea una funcion anadirTemperaturaEnFahrenheit que reciba un array de objetos con key celsius.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key fahrenheit.
// Ej: si recibe [{ name: 'Oslo', celsius: 0 }, { name: 'Dubai', celsius: 100 }] devuelve [{ name: 'Oslo', celsius: 0, fahrenheit: 32 }, { name: 'Dubai', celsius: 100, fahrenheit: 212 }]

function anadirTemperaturaEnFahrenheit(temperatureList) {
    const TO_FAHRENHEIT = (9 / 5)
    const newList = temperatureList.map((temperature) => {
        return {
            name: temperature.name,
            celsius: temperature.celsius,
            fahrenheit: Number(((temperature.celsius * TO_FAHRENHEIT) + 32).toFixed(2))
        }
    })
    return newList
}

// Ejercicio 6
// Crea una funcion anadirEdadEnMeses que reciba un array de objetos con key edad (en anios).
// Devuelve un array de objetos con una nueva key edadMeses.
// Ej: si recibe [{ name: 'Mia', edad: 1 }, { name: 'Leo', edad: 5 }] devuelve [{ name: 'Mia', edad: 1, edadMeses: 12 }, { name: 'Leo', edad: 5, edadMeses: 60 }]

function anadirEdadEnMeses(monthsYear) {
    const TO_MONTHS = 12
    const newAge = monthsYear.map((month) => {
        return {
            name: month.name,
            edad: month.edad,
            edadMeses: Number((month.edad * TO_MONTHS).toFixed(2))
        }
    })
    return newAge
}

// Ejercicio 7
// Crea una funcion anadirVelocidadEnKmh que reciba un array de objetos con key ms (metros por segundo).
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key kmh.
// Ej: si recibe [{ name: 'Car1', ms: 10 }, { name: 'Car2', ms: 20 }] devuelve [{ name: 'Car1', ms: 10, kmh: 36 }, { name: 'Car2', ms: 20, kmh: 72 }]

function anadirVelocidadEnKmh(carsRace) {
    const TO_SPEED = 3.60
    const newDistance = carsRace.map((car) => {
        return {
            name: car.name,
            ms: car.ms,
            kmh: Number((car.ms * TO_SPEED).toFixed(2))
        }
    })
    return newDistance
}

// Ejercicio 8
// Crea una funcion anadirPrecioConDescuento que reciba un array de objetos con key precio y un porcentaje de descuento.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key precioConDescuento.
// Ej: si recibe [{ name: 'Shirt', precio: 100 }, { name: 'Pants', precio: 200 }] y 10 devuelve [{ name: 'Shirt', precio: 100, precioConDescuento: 90 }, { name: 'Pants', precio: 200, precioConDescuento: 180 }]

function anadirPrecioConDescuento(salesList, percentage) {

    const TO_DISCOUNT = percentage / 100

    const newProducts = salesList.map((product) => {
        return {
            name: product.name,
            precio: product.precio,
            precioConDescuento: Number((product.precio - (product.precio * TO_DISCOUNT)).toFixed(2))
        }
    })
    return newProducts
}

// Ejercicio 9
// Crea una funcion anadirPrecioConIva que reciba un array de objetos con key precio y un porcentaje de IVA.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key precioConIva.
// Ej: si recibe [{ name: 'Shirt', precio: 100 }, { name: 'Pants', precio: 200 }] y 21 devuelve [{ name: 'Shirt', precio: 100, precioConIva: 121 }, { name: 'Pants', precio: 200, precioConIva: 242 }]

function anadirPrecioConIva(salesList, IVA) {

    const newPrices = salesList.map((product) => {
        return {
            name: product.name,
            precio: product.precio,
            precioConIva: Number((product.precio + (product.precio * IVA / 100)).toFixed(2))
        }
    })

    return newPrices
}

// Ejercicio 10
// Crea una funcion anadirSalarioNeto que reciba un array de objetos con key salarioBruto y un porcentaje de retencion.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key salarioNeto.
// Ej: si recibe [{ name: 'Alice', salarioBruto: 1000 }, { name: 'Bob', salarioBruto: 2000 }] y 20 devuelve [{ name: 'Alice', salarioBruto: 1000, salarioNeto: 800 }, { name: 'Bob', salarioBruto: 2000, salarioNeto: 1600 }]

function anadirSalarioNeto(employeeList, percentage) {

    const TO_DISCOUNT = percentage / 100
    const newSalaries = employeeList.map((salarie) => {
        return {
            name: salarie.name,
            salarioBruto: salarie.salarioBruto,
            salarioNeto: Number((salarie.salarioBruto - (salarie.salarioBruto * TO_DISCOUNT)).toFixed(2))
        }
    })

    return newSalaries
}

// Ejercicio 11
// Crea una funcion anadirPrecioPorUnidad que reciba un array de objetos con key precio y key cantidad.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key precioPorUnidad (precio dividido entre cantidad).
// Ej: si recibe [{ name: 'Eggs', precio: 12, cantidad: 6 }, { name: 'Water', precio: 20, cantidad: 4 }] devuelve [{ name: 'Eggs', precio: 12, cantidad: 6, precioPorUnidad: 2 }, { name: 'Water', precio: 20, cantidad: 4, precioPorUnidad: 5 }]

function anadirPrecioPorUnidad(productsEco) {

    const newList = productsEco.map((product) => {
        return {
            name: product.name,
            precio: product.precio,
            cantidad: product.cantidad,
            precioPorUnidad: Number((product.precio / product.cantidad).toFixed(2))
        }
    })

    return newList
}

// Ejercicio 12
// Crea una funcion anadirTotalConEnvio que reciba un array de objetos con key precio y key envio.
// Devuelve un array de objetos con una nueva key total (precio mas el coste de envio).
// Ej: si recibe [{ name: 'Shirt', precio: 20, envio: 5 }, { name: 'Pants', precio: 35, envio: 0 }] devuelve [{ name: 'Shirt', precio: 20, envio: 5, total: 25 }, { name: 'Pants', precio: 35, envio: 0, total: 35 }]

function anadirTotalConEnvio(productsList) {

    const newList = productsList.map((product) => {
        return {
            name: product.name,
            precio: product.precio,
            envio: product.envio,
            total: product.precio + product.envio
        }
    })
    return newList
}

// Ejercicio 13
// Crea una funcion anadirPropina que reciba un array de objetos con key cuenta y un porcentaje de propina.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key propina.
// Ej: si recibe [{ name: 'Table1', cuenta: 100 }, { name: 'Table2', cuenta: 50 }] y 15 devuelve [{ name: 'Table1', cuenta: 100, propina: 15 }, { name: 'Table2', cuenta: 50, propina: 7.5 }]

function anadirPropina(tablesNumber, percentage) {

    const extraPrice = tablesNumber.map((table) => {
        return {
            name: table.name,
            cuenta: table.cuenta,
            propina: Number(((table.cuenta * percentage) / 100).toFixed(2))
        }
    })

    return extraPrice
}

// Ejercicio 14
// Crea una funcion anadirComision que reciba un array de objetos con key ventas y un porcentaje de comision.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key comision.
// Ej: si recibe [{ name: 'Alice', ventas: 1000 }, { name: 'Bob', ventas: 2000 }] y 5 devuelve [{ name: 'Alice', ventas: 1000, comision: 50 }, { name: 'Bob', ventas: 2000, comision: 100 }]

function anadirComision(employeesList, percentage) {

    const employeesWithCommission = employeesList.map((employ) => {
        return {
            name: employ.name,
            ventas: employ.ventas,
            comision: Number(((employ.ventas * percentage) / 100).toFixed(2))
        }
    })

    return employeesWithCommission
}

// Ejercicio 15
// Crea una funcion anadirInteres que reciba un array de objetos con key capital y un porcentaje de interes.
// Redondea el resultado a 2 decimales.
// Devuelve un array de objetos con una nueva key interes.
// Ej: si recibe [{ name: 'AccountA', capital: 1000 }, { name: 'AccountB', capital: 2000 }] y 4 devuelve [{ name: 'AccountA', capital: 1000, interes: 40 }, { name: 'AccountB', capital: 2000, interes: 80 }]

function anadirInteres(accountsList, percentage) {

    const accountsWithInterest = accountsList.map((account) => {
        return {
            name: account.name,
            capital: account.capital,
            interes: Number(((account.capital * percentage) / 100).toFixed(2))
        }
    })

    return accountsWithInterest
}