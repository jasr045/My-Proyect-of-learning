// Ejercicio 1
// Crea una funcion buscarValorPar que reciba un array de objetos con key valor
// y devuelva el primer objeto cuyo valor es par, usando find
// Ej: si recibe [{ valor: 1 }, { valor: 3 }, { valor: 4 }, { valor: 6 }] devuelve { valor: 4 }

function buscarValorPar(numbersList) {

    const pairValue = numbersList.find((number) => {

        return number.valor % 2 === 0
    })
    return pairValue
}

// Ejercicio 2
// Crea una funcion buscarValorImpar que reciba un array de objetos con key valor
// y devuelva el primer objeto cuyo valor es impar, usando find
// Ej: si recibe [{ valor: 2 }, { valor: 4 }, { valor: 5 }, { valor: 6 }] devuelve { valor: 5 }

function buscarValorImpar(numbersList) {

    const oddValue = numbersList.find((number) => {

        return number.valor % 2 !== 0
    })
    return oddValue
}

// Ejercicio 3
// Crea una funcion buscarValorPositivo que reciba un array de objetos con key valor
// y devuelva el primer objeto cuyo valor es positivo, usando find
// Ej: si recibe [{ valor: -3 }, { valor: -1 }, { valor: 5 }, { valor: -2 }] devuelve { valor: 5 }

function buscarValorPositivo(objectsList) {

    const positiveValue = objectsList.find((object) => {

        return object.valor > 0
    })
    return positiveValue
}

// Ejercicio 4
// Crea una funcion buscarValorNegativo que reciba un array de objetos con key valor
// y devuelva el primer objeto cuyo valor es negativo, usando find
// Ej: si recibe [{ valor: 3 }, { valor: 1 }, { valor: -5 }, { valor: 2 }] devuelve { valor: -5 }

function buscarValorNegativo(objectsList) {

    const negativeValue = objectsList.find((object) => {

        return object.valor < 0
    })
    return negativeValue
}

// Ejercicio 5
// Crea una funcion buscarValorMayorQue que reciba un array de objetos con key valor y un limite
// y devuelva el primer objeto cuyo valor es mayor que ese limite, usando find
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve { valor: 10 }

function buscarValorMayorQue(objectsList, limit) {

    const maxValue = objectsList.find((object) => {

        return object.valor > limit
    })
    return maxValue
}

// Ejercicio 6
// Crea una funcion buscarValorMenorQue que reciba un array de objetos con key valor y un limite
// y devuelva el primer objeto cuyo valor es menor que ese limite, usando find
// Ej: si recibe [{ valor: 13 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve { valor: 7 }

function buscarValorMenorQue(objectsList, limit) {

    const minimumValue = objectsList.find((object) => {

        return object.valor < limit
    })
    return minimumValue
}

// Ejercicio 7
// Crea una funcion buscarPalabraLarga que reciba un array de objetos con key palabra
// y devuelva el primer objeto cuya palabra tiene mas de 4 letras, usando find
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }, { palabra: 'mar' }] devuelve { palabra: 'ciudad' }

function buscarPalabraLarga(wordsList) {

    const moreFour = wordsList.find((word) => {

        return word.palabra.length > 4
    })
    return moreFour
}

// Ejercicio 8
// Crea una funcion buscarPalabraCorta que reciba un array de objetos con key palabra
// y devuelva el primer objeto cuya palabra tiene 3 letras o menos, usando find
// Ej: si recibe [{ palabra: 'ciudad' }, { palabra: 'sol' }, { palabra: 'puerta' }] devuelve { palabra: 'sol' }

function buscarPalabraCorta(wordsList) {

    const threeOrLess = wordsList.find((word) => {

        return word.palabra.length <= 3
    })
    return threeOrLess
}

// Ejercicio 9
// Crea una funcion buscarPalabraQueEmpiecePor que reciba un array de objetos con key palabra y una letra
// y devuelva el primer objeto cuya palabra empieza por esa letra, usando find
// Ej: si recibe [{ palabra: 'perro' }, { palabra: 'casa' }, { palabra: 'coche' }] y 'c' devuelve { palabra: 'casa' }

function buscarPalabraQueEmpiecePor(wordsList, letter) {

    const wordWithLetter = wordsList.find((word) => {

        return word.palabra.startsWith(letter)
    })
    return wordWithLetter
}

// Ejercicio 10
// Crea una funcion buscarPalabraQueContenga que reciba un array de objetos con key palabra y un texto
// y devuelva el primer objeto cuya palabra contiene ese texto, usando find
// Ej: si recibe [{ palabra: 'gato' }, { palabra: 'pelota' }, { palabra: 'gota' }] y 'ot' devuelve { palabra: 'pelota' }

function buscarPalabraQueContenga(objectsList, text) {

    const includedWord = objectsList.find((object) => {

        return object.palabra.includes(text)
    })
    return includedWord
}

// Ejercicio 11
// Crea una funcion buscarUsuarioMayorDeEdad que reciba un array de usuarios con key edad
// y devuelva el primer usuario con edad mayor o igual a 18, usando find
// Ej: si recibe [{ nombre: 'Ana', edad: 15 }, { nombre: 'David', edad: 30 }, { nombre: 'Luis', edad: 17 }] devuelve { nombre: 'David', edad: 30 }

function buscarUsuarioMayorDeEdad(usersList) {

    const legalAge = usersList.find((user) => {

        return user.edad >= 18
    })
    return legalAge
}

// Ejercicio 12
// Crea una funcion buscarUsuarioMenorDeEdad que reciba un array de usuarios con key edad
// y devuelva el primer usuario con edad menor de 18, usando find
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }, { nombre: 'Luis', edad: 17 }] devuelve { nombre: 'Ana', edad: 15 }

function buscarUsuarioMenorDeEdad(usersList) {

    const underAge = usersList.find((user) => {

        return user.edad < 18
    })
    return underAge
}

// Ejercicio 13
// Crea una funcion buscarUsuarioActivo que reciba un array de usuarios con key activo
// y devuelva el primer usuario activo, usando find
// Ej: si recibe [{ nombre: 'David', activo: false }, { nombre: 'Ana', activo: true }, { nombre: 'Luis', activo: true }] devuelve { nombre: 'Ana', activo: true }

function buscarUsuarioActivo(usersList) {

    const activeUser = usersList.find((user) => {

        return user.activo
    })
    return activeUser
}

// Ejercicio 14
// Crea una funcion buscarUsuarioInactivo que reciba un array de usuarios con key activo
// y devuelva el primer usuario inactivo, usando find
// Ej: si recibe [{ nombre: 'David', activo: true }, { nombre: 'Ana', activo: false }, { nombre: 'Luis', activo: true }] devuelve { nombre: 'Ana', activo: false }

function buscarUsuarioInactivo(usersList) {

    const inactiveUser = usersList.find((user) => {

        return !user.activo
    })
    return inactiveUser
}

// Ejercicio 15
// Crea una funcion buscarProductoBarato que reciba un array de productos con key precio y un limite
// y devuelva el primer producto cuyo precio es menor que ese limite, usando find
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }, { nombre: 'Zapatos', precio: 50 }] y 30 devuelve { nombre: 'Camisa', precio: 20 }

function buscarProductoBarato(productsList, limit) {

    const lowestPrice = productsList.find((product) => {

        return product.precio < limit
    })
    return lowestPrice
}