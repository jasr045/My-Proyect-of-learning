// Ejercicio 1
// Crea una funcion sumarValores que reciba un array de objetos con key valor
// y devuelva la suma de todos los valores usando reduce
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }] devuelve 6

function sumarValores(valueList) {
    const valueTotal = valueList.reduce((acc, value) => {
        return acc + value.valor
    }, 0)
    return valueTotal
}

// Ejercicio 2
// Crea una funcion multiplicarValores que reciba un array de objetos con key valor
// y devuelva el resultado de multiplicarlos todos usando reduce
// Ej: si recibe [{ valor: 2 }, { valor: 3 }, { valor: 4 }] devuelve 24

function multiplicarValores(valueList) {
    const valueTotal = valueList.reduce((acc, value) => {
        return acc * value.valor
    }, 1)
    return valueTotal
}

// Ejercicio 3
// Crea una funcion contarPares que reciba un array de objetos con key valor
// y devuelva cuantos objetos tienen un valor par usando reduce
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }, { valor: 4 }] devuelve 2

function contarPares(valueList) {
    const valueTotal = valueList.reduce((acc, value) => {
        return value.valor % 2 === 0 ? acc + 1 : acc
    }, 0)
    return valueTotal
}

// Ejercicio 4
// Crea una funcion sumarMayoresQue que reciba un array de objetos con key valor y un limite
// y devuelva la suma solo de los valores mayores que ese limite usando reduce
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve 35

function sumarMayoresQue(valueList, limit) {
    const valueTotal = valueList.reduce((acc, value) => {
        return value.valor > limit ? acc + value.valor : acc
    }, 0)
    return valueTotal
}

// Ejercicio 5
// Crea una funcion obtenerObjetoConMayorValor que reciba un array de objetos con key valor
// y devuelva el objeto completo cuyo valor es el mas alto, usando reduce
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }] devuelve { valor: 10 }

function obtenerObjetoConMayorValor(valueList) {
    const maximumValue = valueList.reduce((acc, value) => {
        return value.valor > acc.valor ? value : acc
    })
    return maximumValue
}

// Ejercicio 6
// Crea una funcion obtenerObjetoConMenorValor que reciba un array de objetos con key valor
// y devuelva el objeto completo cuyo valor es el mas bajo, usando reduce
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }] devuelve { valor: 3 }

function obtenerObjetoConMenorValor(valueList) {
    const minimumValue = valueList.reduce((acc, value) => {
        return value.valor < acc.valor ? value : acc
    })
    return minimumValue
}

// Ejercicio 7
// Crea una funcion contarPalabrasLargas que reciba un array de objetos con key palabra
// y devuelva cuantas palabras tienen mas de 4 letras, usando reduce
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }, { palabra: 'puerta' }] devuelve 2

function contarPalabrasLargas(wordsList) {
    const wordsOlder = wordsList.reduce((acc, word) => {
        return word.palabra.length > 4 ? acc + 1 : acc
    }, 0)
    return wordsOlder
}

// Ejercicio 8
// Crea una funcion concatenarPalabras que reciba un array de objetos con key palabra
// y devuelva un texto con todas las palabras unidas por un espacio, usando reduce
// Ej: si recibe [{ palabra: 'Hola' }, { palabra: 'Mundo' }] devuelve 'Hola Mundo'

function concatenarPalabras(wordsList) {
    const newPhrase = wordsList.reduce((acc, word) => {
        return acc === '' ? word.palabra : acc + ' ' + word.palabra
    }, '')
    return newPhrase
}

// Ejercicio 9
// Crea una funcion obtenerPalabraMasLarga que reciba un array de objetos con key palabra
// y devuelva la palabra con mas letras, usando reduce
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }] devuelve 'ciudad'

function obtenerPalabraMasLarga(wordsList) {
    const newWord = wordsList.reduce((acc, word) => {
        return acc.longitud < word.palabra.length
            ? { longitud: word.palabra.length, palabra: word.palabra }
            : acc
    }, { longitud: 0, palabra: '' })

    return newWord.palabra
}

// Ejercicio 10
// Crea una funcion sumarEdades que reciba un array de usuarios con key edad
// y devuelva la suma de todas las edades usando reduce
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }] devuelve 45

function sumarEdades(usersList) {
    const agesTotal = usersList.reduce((acc, user) => {
        return acc + user.edad
    }, 0)

    return agesTotal
}

// Ejercicio 11
// Crea una funcion contarMayoresDeEdad que reciba un array de usuarios con key edad
// y devuelva cuantos usuarios tienen edad mayor o igual a 18, usando reduce
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }, { nombre: 'Luis', edad: 17 }] devuelve 1

function contarMayoresDeEdad(usersList) {
    const legalAge = usersList.reduce((acc, user) => {
        return user.edad >= 18 ? acc + 1 : acc
    }, 0)

    return legalAge
}

// Ejercicio 12
// Crea una funcion obtenerUsuarioMasJoven que reciba un array de usuarios con key edad
// y devuelva el usuario completo con la edad mas baja, usando reduce
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }, { nombre: 'Luis', edad: 17 }] devuelve { nombre: 'Ana', edad: 15 }

function obtenerUsuarioMasJoven(usersList) {
    const minority = usersList.reduce((acc, user) => {
        return user.edad < acc.edad ? user : acc
    })

    return minority
}

// Ejercicio 13
// Crea una funcion obtenerNombres que reciba un array de usuarios con key nombre
// y devuelva un texto con todos los nombres unidos por una coma y un espacio, usando reduce
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }] devuelve 'David, Ana'

function obtenerNombres(usersList) {
    const allNames = usersList.reduce((acc, user) => {
        return acc === '' ? user.nombre : acc + ', ' + user.nombre
    }, '')

    return allNames
}

// Ejercicio 14
// Crea una funcion sumarPreciosDeProductos que reciba un array de productos con key precio
// y devuelva la suma de todos los precios usando reduce
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }] devuelve 55

function sumarPreciosDeProductos(productsList) {
    const allPrices = productsList.reduce((acc, product) => {
        return acc + product.precio
    }, 0)

    return allPrices
}

// Ejercicio 15
// Crea una funcion obtenerProductoMasCaro que reciba un array de productos con key precio
// y devuelva el producto completo con el precio mas alto, usando reduce
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }] devuelve { nombre: 'Pantalon', precio: 35 }

function obtenerProductoMasCaro(productsList) {
    const mostExpensive = productsList.reduce((acc, product) => {
        return acc.precio < product.precio ? product : acc
    })

    return mostExpensive
}