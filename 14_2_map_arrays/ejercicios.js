// Ejercicio 1
// Crea una funcion duplicarValores que reciba un array de objetos con key valor
// y devuelva un array de objetos con el valor multiplicado por 2
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }] devuelve [{ valor: 2 }, { valor: 4 }, { valor: 6 }]

function duplicarValores(simpleValueList) {
    const newArrayDouble = simpleValueList.map((value) => {
        return { valor: value.valor * 2 }
    })
    return newArrayDouble
}

// Ejercicio 2
// Crea una funcion valoresAlCuadrado que reciba un array de objetos con key valor
// y devuelva un array de objetos con el valor elevado al cuadrado
// Ej: si recibe [{ valor: 2 }, { valor: 3 }, { valor: 4 }] devuelve [{ valor: 4 }, { valor: 9 }, { valor: 16 }]

function valoresAlCuadrado(objectsList) {

    const multipliedNumber = objectsList.map((object) => {
        return { valor: object.valor * object.valor }
    })
    return multipliedNumber
}

// Ejercicio 3
// Crea una funcion valoresAbsolutos que reciba un array de objetos con key valor
// (puede contener negativos) y devuelva un array de objetos con el valor convertido a su valor absoluto
// Ej: si recibe [{ valor: 3 }, { valor: -5 }, { valor: -2 }] devuelve [{ valor: 3 }, { valor: 5 }, { valor: 2 }]

function valoresAbsolutos(objectsList) {

    const multipliedNumber = objectsList.map((object) => {
        return { valor: Math.abs(object.valor) }
    })
    return multipliedNumber
}

// Ejercicio 4
// Crea una funcion sumarAlValor que reciba un array de objetos con key valor y un numero
// y devuelva un array de objetos con ese numero sumado al valor
// Ej: si recibe [{ valor: 1 }, { valor: 2 }] y 10 devuelve [{ valor: 11 }, { valor: 12 }]

function sumarAlValor(objectsList, number) {

    const summedNumbers = objectsList.map((object) => {
        return { valor: object.valor + number }
    })
    return summedNumbers
}

// Ejercicio 5
// Crea una funcion marcarPares que reciba un array de objetos con key valor
// y devuelva un array de objetos con una nueva key esPar (true si el valor es par)
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }] devuelve [{ valor: 1, esPar: false }, { valor: 2, esPar: true }, { valor: 3, esPar: false }]

function marcarPares(objectsList) {

    const pairsLsit = objectsList.map((object) => {
        return {
            valor: object.valor,
            esPar: object.valor % 2 === 0
        }
    })
    return pairsLsit
}

// Ejercicio 6
// Crea una funcion marcarPositivos que reciba un array de objetos con key valor
// y devuelva un array de objetos con una nueva key esPositivo (true si el valor es positivo)
// Ej: si recibe [{ valor: 3 }, { valor: -1 }] devuelve [{ valor: 3, esPositivo: true }, { valor: -1, esPositivo: false }]

function marcarPositivos(objectsList) {

    const positiveLsit = objectsList.map((object) => {
        return {
            valor: object.valor,
            esPositivo: object.valor > 0
        }
    })
    return positiveLsit
}

// Ejercicio 7
// Crea una funcion ponerPalabrasEnMayusculas que reciba un array de objetos con key palabra
// y devuelva un array de objetos con la palabra en mayusculas
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'mar' }] devuelve [{ palabra: 'SOL' }, { palabra: 'MAR' }]

function ponerPalabrasEnMayusculas(objectsList) {

    const wordsList = objectsList.map((object) => {
        return { palabra: object.palabra.toUpperCase() }

    })
    return wordsList
}

// Ejercicio 8
// Crea una funcion anadirLongitudDePalabra que reciba un array de objetos con key palabra
// y devuelva un array de objetos con una nueva key longitud (el numero de letras de la palabra)
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }] devuelve [{ palabra: 'sol', longitud: 3 }, { palabra: 'ciudad', longitud: 6 }]

function anadirLongitudDePalabra(objectsList) {

    const wordsList = objectsList.map((object) => {
        return {
            palabra: object.palabra,
            longitud: object.palabra.length
        }
    })
    return wordsList
}

// Ejercicio 9
// Crea una funcion marcarPalabrasLargas que reciba un array de objetos con key palabra
// y devuelva un array de objetos con una nueva key esLarga (true si la palabra tiene mas de 4 letras)
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }] devuelve [{ palabra: 'sol', esLarga: false }, { palabra: 'ciudad', esLarga: true }]

function marcarPalabrasLargas(wordsList) {
    const newArray = wordsList.map((word) => {
        return {
            palabra: word.palabra,
            esLarga: word.palabra.length > 4,
        }
    })
    return newArray
}

// Ejercicio 10
// Crea una funcion anadirSaludo que reciba un array de objetos con key nombre
// y devuelva un array de objetos con una nueva key saludo ('Hola, ' seguido del nombre)
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }] devuelve [{ nombre: 'David', saludo: 'Hola, David' }, { nombre: 'Ana', saludo: 'Hola, Ana' }]

function anadirSaludo(wordsList) {
    const newArray = wordsList.map((word) => {
        return {
            nombre: word.nombre,
            saludo: 'Hola, ' + word.nombre
        }
    })
    return newArray
}

// Ejercicio 11
// Crea una funcion marcarMayoresDeEdad que reciba un array de usuarios con key edad
// y devuelva un array de usuarios con una nueva key esMayorDeEdad (true si la edad es mayor o igual a 18)
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }] devuelve [{ nombre: 'David', edad: 30, esMayorDeEdad: true }, { nombre: 'Ana', edad: 15, esMayorDeEdad: false }]

function marcarMayoresDeEdad(usersList) {
    const newList = usersList.map((user) => {
        return {
            nombre: user.nombre,
            edad: user.edad,
            esMayorDeEdad: user.edad >= 18
        }
    })
    return newList
}

// Ejercicio 12
// Crea una funcion calcularEdadDentroDeNAnios que reciba un array de usuarios con key edad y un numero de anios
// y devuelva un array de usuarios con una nueva key edadFutura (edad + numero de anios)
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }] y 5 devuelve [{ nombre: 'David', edad: 30, edadFutura: 35 }, { nombre: 'Ana', edad: 15, edadFutura: 20 }]

function calcularEdadDentroDeNAnios(usersList, yearsList) {
    const newList = usersList.map((user) => {
        return {
            nombre: user.nombre,
            edad: user.edad,
            edadFutura: user.edad + yearsList
        }
    })
    return newList
}

// Ejercicio 13
// Crea una funcion anadirEstadoDeActivo que reciba un array de usuarios con key activo
// y devuelva un array de usuarios con una nueva key estado: 'Activo' cuando activo es true e 'Inactivo' cuando es false
// Ej: si recibe [{ nombre: 'David', activo: true }, { nombre: 'Ana', activo: false }] devuelve [{ nombre: 'David', activo: true, estado: 'Activo' }, { nombre: 'Ana', activo: false, estado: 'Inactivo' }]

function anadirEstadoDeActivo(usersList) {
    const newList = usersList.map((user) => {
        return {
            nombre: user.nombre,
            activo: user.activo,
            estado: user.activo ? 'Activo' : 'Inactivo'
        }
    })
    return newList
}

// Ejercicio 14
// Crea una funcion aplicarDescuentoFijo que reciba un array de productos con key precio y una cantidad de descuento
// y devuelva un array de productos con el precio reducido en esa cantidad
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }] y 5 devuelve [{ nombre: 'Camisa', precio: 15 }, { nombre: 'Pantalon', precio: 30 }]

function aplicarDescuentoFijo(productsList, discount) {
    const newList = productsList.map((product) => {
        return {
            nombre: product.nombre,
            precio: product.precio - discount
        }
    })
    return newList
}

// Ejercicio 15
// Crea una funcion duplicarPrecio que reciba un array de productos con key precio
// y devuelva un array de productos con el precio duplicado
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }] devuelve [{ nombre: 'Camisa', precio: 40 }, { nombre: 'Pantalon', precio: 70 }]

function duplicarPrecio(productsList) {
    const newList = productsList.map((product) => {
        return {
            nombre: product.nombre,
            precio: product.precio * 2
        }
    })
    return newList
}