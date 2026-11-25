// Ejercicio 1
// Crea una funcion sumarTodos que reciba un array de numeros
// y devuelva la suma de todos ellos usando reduce
// Ej: si recibe [1, 2, 3, 4] devuelve 10

function sumarTodos(numbersList) {

    const sumTotal = numbersList.reduce((acc, number) => {
        return acc + number
    }, 0)
    return sumTotal
}

// Ejercicio 2
// Crea una funcion multiplicarTodos que reciba un array de numeros
// y devuelva el resultado de multiplicarlos todos usando reduce
// Ej: si recibe [1, 2, 3, 4] devuelve 24

function multiplicarTodos(numbersList) {

    const totalMultiplier = numbersList.reduce((acc, number) => {
        return acc * number
    }, 1)
    return totalMultiplier
}

// Ejercicio 3
// Crea una funcion obtenerElMayor que reciba un array de numeros
// y devuelva el numero mas grande usando reduce
// Ej: si recibe [3, 9, 2, 7] devuelve 9

function obtenerElMayor(numbersList) {

    const largestNumber = numbersList.reduce((acc, number) => {
        return number > acc ? number : acc
    })
    return largestNumber
}

// Ejercicio 4
// Crea una funcion obtenerElMenor que reciba un array de numeros
// y devuelva el numero mas pequeño usando reduce
// Ej: si recibe [3, 9, 2, 7] devuelve 2

function obtenerElMenor(numbersList) {

    const smallestNumber = numbersList.reduce((acc, number) => {
        return number < acc ? number : acc
    })
    return smallestNumber
}

// Ejercicio 5
// Crea una funcion contarPares que reciba un array de numeros
// y devuelva cuantos de ellos son pares usando reduce
// Ej: si recibe [1, 2, 3, 4, 5, 6] devuelve 3

function contarPares(numbersList) {

    const arePairs = numbersList.reduce((acc, number) => {
        return number % 2 === 0 ? acc + 1 : acc
    }, 0)
    return arePairs
}

// Ejercicio 6
// Crea una funcion contarMayoresQue que reciba un array de numeros y un limite
// y devuelva cuantos numeros son mayores que ese limite usando reduce
// Ej: si recibe [3, 10, 7, 25] y 8 devuelve 2

function contarMayoresQue(numbersList, limit) {

    const theMajors = numbersList.reduce((acc, number) => {
        return number > limit ? acc + 1 : acc
    }, 0)
    return theMajors
}

// Ejercicio 7
// Crea una funcion sumarSoloPares que reciba un array de numeros
// y devuelva la suma solo de los numeros pares usando reduce
// Ej: si recibe [1, 2, 3, 4, 5] devuelve 6

function sumarSoloPares(numbersList) {

    const arePairs = numbersList.reduce((acc, number) => {
        return number % 2 === 0 ? acc + number : acc
    }, 0)
    return arePairs
}

// Ejercicio 8
// Crea una funcion restarTodos que reciba un array de numeros
// y devuelva el resultado de restarlos todos en orden (el primero menos el resto) usando reduce
// Ej: si recibe [10, 3, 2] devuelve 5 (10-3-2)

function restarTodos(numbersList) {
    const subtract = numbersList.reduce((acc, number) => {
        return acc - number
    })
    return subtract
}

// Ejercicio 9
// Crea una funcion concatenarPalabras que reciba un array de palabras
// y devuelva un texto con todas las palabras unidas por un espacio, usando reduce
// Ej: si recibe ['Hola', 'Mundo'] devuelve 'Hola Mundo'

function concatenarPalabras(wordsList) {
    const concatenatedText = wordsList.reduce((acc, word) => {
        return acc + ' ' + word
    })
    return concatenatedText
}

// Ejercicio 10
// Crea una funcion obtenerPalabraMasLarga que reciba un array de palabras
// y devuelva la palabra con mas letras usando reduce
// Ej: si recibe ['sol', 'ciudad', 'mar'] devuelve 'ciudad'

function obtenerPalabraMasLarga(wordsList) {
    const longer = wordsList.reduce((acc, word) => {
        return word.length > acc.length ? word : acc
    })
    return longer
}

// Ejercicio 11
// Crea una funcion obtenerPalabraMasCorta que reciba un array de palabras
// y devuelva la palabra con menos letras usando reduce
// Ej: si recibe ['sol', 'ciudad', 'mar'] devuelve 'sol'

function obtenerPalabraMasCorta(wordsList) {
    const shortWord = wordsList.reduce((acc, word) => {
        return word.length < acc.length ? word : acc
    })
    return shortWord
}

// Ejercicio 12
// Crea una funcion sumarLongitudTotal que reciba un array de palabras
// y devuelva la suma de la longitud de todas usando reduce
// Ej: si recibe ['hola', 'mundo'] devuelve 9

function sumarLongitudTotal(wordsList) {
    const totalLength = wordsList.reduce((acc, word) => {
        return acc + word.length
    }, 0)
    return totalLength
}

// Ejercicio 13
// Crea una funcion contarVerdaderos que reciba un array de booleanos
// y devuelva cuantos valores true hay usando reduce
// Ej: si recibe [true, false, true, true] devuelve 3

function contarVerdaderos(booleanList) {
    const trueTotal = booleanList.reduce((acc, booleanValue) => {
        return booleanValue === true ? acc + 1 : acc
    }, 0)
    return trueTotal
}

// Ejercicio 14
// Crea una funcion contarFalsos que reciba un array de booleanos
// y devuelva cuantos valores false hay usando reduce
// Ej: si recibe [true, false, true, false] devuelve 2

function contarFalsos(booleanList) {
    const falseTotal = booleanList.reduce((acc, boolean) => {
        return boolean === false ? acc + 1 : acc
    }, 0)
    return falseTotal
}

// Ejercicio 15
// Crea una funcion todosSonVerdaderos que reciba un array de booleanos
// y devuelva true solo si todos los valores son true, usando reduce
// Ej: si recibe [true, true, true] devuelve true
// Ej: si recibe [true, false, true] devuelve false

function todosSonVerdaderos(booleanList) {
    const trueAll = booleanList.reduce((acc, boolean) => {
        return boolean && acc
    }, true)
    return trueAll
}