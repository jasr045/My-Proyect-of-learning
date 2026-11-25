// Ejercicio 1
// Crea una funcion filtrarProductosCarosEnDolares que reciba un array de objetos con key precio (en euros)
// y un limite en dolares. 1 euro equivale a 1.1 dolares.
// Devuelve los objetos cuyo precio en dolares es mayor que el limite.
// Ej: si recibe [{ precio: 10 }, { precio: 20 }, { precio: 30 }] y 15 devuelve [{ precio: 20 }, { precio: 30 }]

TO_DOLLAR = 1.1

function filtrarProductosCarosEnDolares(productList, limit) {
  const resultado = productList.filter((product) => {
    return product.precio * TO_DOLLAR > limit
  })
  return resultado
}

// Ejercicio 2
// Crea una funcion filtrarProductosBaratosEnDolares que reciba un array de objetos con key precio (en euros)
// y un limite en dolares. 1 euro equivale a 1.1 dolares.
// Devuelve los objetos cuyo precio en dolares es menor que el limite.
// Ej: si recibe [{ precio: 10 }, { precio: 20 }, { precio: 30 }] y 15 devuelve [{ precio: 10 }]

TO_DOLLAR = 1.1

function filtrarProductosBaratosEnDolares(productList, limit) {
  const resultado = productList.filter((product) => {
    return product.precio * TO_DOLLAR < limit
  })
  return resultado
}

// Ejercicio 3
// Crea una funcion filtrarDistanciasLargas que reciba un array de objetos con key millas
// y un limite en kilometros. 1 milla equivale a 1.6 km.
// Devuelve los objetos cuya distancia en km es mayor que el limite.
// Ej: si recibe [{ millas: 10 }, { millas: 20 }, { millas: 50 }] y 30 devuelve [{ millas: 20 }, { millas: 50 }]

function filtrarDistanciasLargas(distances, limit) {
  const resultado = distances.filter((place) => {
    return place.millas * 1.6 > limit
  })
  return resultado
}

// Ejercicio 4
// Crea una funcion filtrarDistanciasCortas que reciba un array de objetos con key millas
// y un limite en kilometros. 1 milla equivale a 1.6 km.
// Devuelve los objetos cuya distancia en km es menor que el limite.
// Ej: si recibe [{ millas: 10 }, { millas: 20 }, { millas: 50 }] y 30 devuelve [{ millas: 10 }]

function filtrarDistanciasCortas(distances, limit) {
  const resultado = distances.filter((place) => {
    return place.millas * 1.6 < limit
  })
  return resultado
}

// Ejercicio 5
// Crea una funcion filtrarTiemposLargos que reciba un array de objetos con key minutos
// y un limite en horas.
// Devuelve los objetos cuyo tiempo en horas es mayor que el limite.
// Ej: si recibe [{ minutos: 90 }, { minutos: 120 }, { minutos: 45 }] y 1 devuelve [{ minutos: 90 }, { minutos: 120 }]

TO_HOUR = 60

function filtrarTiemposLargos(timeEntries, limit) {
  const resultado = timeEntries.filter((time) => {
    return time.minutos / TO_HOUR > limit
  })
  return resultado
}

// Ejercicio 6
// Crea una funcion filtrarTiemposCortos que reciba un array de objetos con key minutos
// y un limite en horas.
// Devuelve los objetos cuyo tiempo en horas es menor que el limite.
// Ej: si recibe [{ minutos: 90 }, { minutos: 120 }, { minutos: 45 }] y 1 devuelve [{ minutos: 45 }]

TO_HOUR = 60

function filtrarTiemposCortos(timeEntries, limit) {
  const resultado = timeEntries.filter((time) => {
    return (time.minutos / TO_HOUR) < limit
  })
  return resultado
}

// Ejercicio 7
// Crea una funcion filtrarPesosPesados que reciba un array de objetos con key kg
// y un limite en libras. 1 kg equivale a 2.2 libras.
// Devuelve los objetos cuyo peso en libras es mayor que el limite.
// Ej: si recibe [{ kg: 10 }, { kg: 20 }, { kg: 5 }] y 15 devuelve [{ kg: 10 }, { kg: 20 }]

const TO_LIBRA = 2.2

function filtrarPesosPesados(shoppingList, limit) {

  const resultado = shoppingList.filter((product) => {
    return product.kg * TO_LIBRA > limit
  })
  return resultado
}

// Ejercicio 8
// Crea una funcion filtrarPesosLigeros que reciba un array de objetos con key kg
// y un limite en libras. 1 kg equivale a 2.2 libras.
// Devuelve los objetos cuyo peso en libras es menor que el limite.
// Ej: si recibe [{ kg: 10 }, { kg: 20 }, { kg: 5 }] y 15 devuelve [{ kg: 5 }]

const TO_LIBRA = 2.2

function filtrarPesosLigeros(shoppingList, limit) {
  
  const resultado = shoppingList.filter((product) => {
    return product.kg * TO_LIBRA < limit
  })
  return resultado
}

// Ejercicio 9
// Crea una funcion filtrarTemperaturasCalientes que reciba un array de objetos con key celsius
// y un limite en fahrenheit.
// Devuelve los objetos cuya temperatura en fahrenheit es mayor que el limite.
// Ej: si recibe [{ celsius: 20 }, { celsius: 0 }, { celsius: 37 }] y 50 devuelve [{ celsius: 20 }, { celsius: 37 }]

function filtrarTemperaturasCalientes(temperaturesList, limit) {
  const resultado = temperaturesList.filter((temperature) => {
    return temperature.celsius * 1.8 + 32 > limit
  })
  return resultado
}

// Ejercicio 10
// Crea una funcion filtrarTemperaturasFrias que reciba un array de objetos con key celsius
// y un limite en fahrenheit.
// Devuelve los objetos cuya temperatura en fahrenheit es menor que el limite.
// Ej: si recibe [{ celsius: 20 }, { celsius: 0 }, { celsius: 37 }] y 50 devuelve [{ celsius: 0 }]

function filtrarTemperaturasFrias(temperaturesList, limit) {
  const resultado = temperaturesList.filter((temperature) => {
    return temperature.celsius * 1.8 + 32 < limit
  })
  return resultado
}

// Ejercicio 11
// Crea una funcion filtrarProductosConDescuento que reciba un array de objetos con key precio
// y un limite. Hay un descuento del 10% en cada precio.
// Devuelve los objetos cuyo precio con descuento es menor que el limite.
// Ej: si recibe [{ precio: 100 }, { precio: 200 }, { precio: 50 }] y 80 devuelve [{ precio: 50 }]

const TO_DISCOUNT = 0.10

function filtrarProductosConDescuento(productList, limit) {

    const resultado = productList.filter((product) => {
        return product.precio - (product.precio * TO_DISCOUNT) < limit
    })

    return resultado
}

// Ejercicio 12
// Crea una funcion filtrarProductosConIva que reciba un array de objetos con key precio
// y un limite. Hay un IVA del 21% en cada precio.
// Devuelve los objetos cuyo precio con IVA es mayor que el limite.
// Ej: si recibe [{ precio: 100 }, { precio: 200 }, { precio: 50 }] y 100 devuelve [{ precio: 100 }, { precio: 200 }]

const TO_IVA = 0.21

function filtrarProductosConIva(shoppingList, limit) {
  const resultado = shoppingList.filter((product) => {
    return product.precio + (product.precio * TO_IVA) > limit
  })
  return resultado
}

// Ejercicio 13
// Crea una funcion filtrarSalariosNetos que reciba un array de objetos con key salarioBruto
// y un limite. Hay una retencion del 20% en cada salario.
// Devuelve los objetos cuyo salario neto es mayor que el limite.
// Ej: si recibe [{ salarioBruto: 1000 }, { salarioBruto: 2000 }, { salarioBruto: 500 }] y 700 devuelve [{ salarioBruto: 1000 }, { salarioBruto: 2000 }]

const TO_RETENTION = 0.20

function filtrarSalariosNetos(salaryList, limit) {
  const resultado = salaryList.filter((employee) => {
    return employee.salarioBruto - (employee.salarioBruto * TO_RETENTION) > limit
  })
  return resultado
}

// Ejercicio 14
// Crea una funcion filtrarVelocidadesRapidas que reciba un array de objetos con key ms (metros por segundo)
// y un limite en km/h.
// Devuelve los objetos cuya velocidad en km/h es mayor que el limite.
// Ej: si recibe [{ ms: 10 }, { ms: 20 }, { ms: 5 }] y 50 devuelve [{ ms: 20 }]

const MS_TO_KMH = 3.6

function filtrarVelocidadesRapidas(speedList, limit) {
  const result = speedList.filter((speed) => {
    return speed.ms * MS_TO_KMH > limit
  })
  return result
}

// Ejercicio 15
// Crea una funcion filtrarMayoresDeEdadEnMeses que reciba un array de objetos con key edad (en anios)
// y un limite en meses.
// Devuelve los objetos cuya edad en meses es mayor o igual que el limite.
// Ej: si recibe [{ edad: 18 }, { edad: 25 }, { edad: 1 }] y 216 devuelve [{ edad: 18 }, { edad: 25 }]

const MONTHS_TO_YEAR = 12

function filtrarMayoresDeEdadEnMeses(ageList, limit) {
  const result = ageList.filter((age) => {
    return age.edad * MONTHS_TO_YEAR >= limit
  })
  return result
}