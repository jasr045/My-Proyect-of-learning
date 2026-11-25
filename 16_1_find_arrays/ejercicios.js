// Ejercicio 1
// Crea una funcion buscarPrimerPar que reciba un array de numeros
// y devuelva el primer numero par usando find
// Ej: si recibe [1, 3, 4, 5, 6] devuelve 4

function buscarPrimerPar(numbersList) {

    const numberPair = numbersList.find((number) => {
        return number % 2 === 0
    })
    return numberPair
}

// Ejercicio 2
// Crea una funcion buscarPrimerImpar que reciba un array de numeros
// y devuelva el primer numero impar usando find
// Ej: si recibe [2, 4, 5, 6, 7] devuelve 5

function buscarPrimerImpar(numbersList) {

    const numberOdd = numbersList.find((number) => {
        return number % 2 !== 0
    })
    return numberOdd
}

// Ejercicio 3
// Crea una funcion buscarPrimerPositivo que reciba un array de numeros
// y devuelva el primer numero positivo usando find
// Ej: si recibe [-3, -1, 5, -2] devuelve 5

function buscarPrimerPositivo(numbersList) {

    const numberPositive = numbersList.find((number) => {
        return number > 0
    })
    return numberPositive
}

// Ejercicio 4
// Crea una funcion buscarPrimerNegativo que reciba un array de numeros
// y devuelva el primer numero negativo usando find
// Ej: si recibe [3, -1, 5, -2] devuelve -1

function buscarPrimerNegativo(numbersList) {

    const numberNegative = numbersList.find((number) => {
        return number < 0
    })
    return numberNegative
}

// Ejercicio 5
// Crea una funcion buscarPrimerMayorQue que reciba un array de numeros y un limite
// y devuelva el primer numero mayor que ese limite usando find
// Ej: si recibe [3, 10, 7, 25] y 8 devuelve 10

function buscarPrimerMayorQue(numbersList, limit) {

    const numberLargest = numbersList.find((number) => {
        return number > limit
    })
    return numberLargest
}

// Ejercicio 6
// Crea una funcion buscarPrimerMenorQue que reciba un array de numeros y un limite
// y devuelva el primer numero menor que ese limite usando find
// Ej: si recibe [13, 10, 7, 25] y 8 devuelve 7

function buscarPrimerMenorQue(numbersList, limit) {

    const numberSmaller = numbersList.find((number) => {
        return number < limit
    })
    return numberSmaller
}

// Ejercicio 7
// Crea una funcion buscarPrimerMultiploDe que reciba un array de numeros y un divisor
// y devuelva el primer numero que sea multiplo de ese divisor usando find
// Ej: si recibe [2, 3, 4, 6, 9] y 3 devuelve 3

function buscarPrimerMultiploDe(numbersList, divider) {

    const numberDivider = numbersList.find((number) => {
        return number % divider === 0
    })
    return numberDivider
}

// Ejercicio 8
// Crea una funcion buscarPalabraLarga que reciba un array de palabras
// y devuelva la primera palabra con mas de 4 letras usando find
// Ej: si recibe ['sol', 'ciudad', 'mar', 'puerta'] devuelve 'ciudad'

function buscarPalabraLarga(wordsList) {

    const fourOrMore = wordsList.find((word) => {

        return word.length > 4
    })
    return fourOrMore
}

// Ejercicio 9
// Crea una funcion buscarPalabraCorta que reciba un array de palabras
// y devuelva la primera palabra con 3 letras o menos usando find
// Ej: si recibe ['ciudad', 'sol', 'puerta'] devuelve 'sol'

function buscarPalabraCorta(wordsList) {

    const threeOrLess = wordsList.find((word) => {

        return word.length <= 3
    })
    return threeOrLess
}

// Ejercicio 10
// Crea una funcion buscarPalabraQueEmpiecePor que reciba un array de palabras y una letra
// y devuelva la primera palabra que empiece por esa letra usando find
// Ej: si recibe ['perro', 'casa', 'coche'] y 'c' devuelve 'casa'

function buscarPalabraQueEmpiecePor(wordsList, letter) {

    const startingLetter = wordsList.find((word) => {

        return word.startsWith(letter)
    })
    return startingLetter
}

// Ejercicio 11
// Crea una funcion buscarPalabraQueContenga que reciba un array de palabras y un texto
// y devuelva la primera palabra que contenga ese texto usando find
// Ej: si recibe ['gato', 'pelota', 'gota'] y 'ot' devuelve 'pelota'

function buscarPalabraQueContenga(wordsList, text) {

    const characterContained = wordsList.find((word) => {

        return word.includes(text)
    })
    return characterContained
}

// Ejercicio 12
// Crea una funcion buscarPalabraConLongitud que reciba un array de palabras y un numero
// y devuelva la primera palabra que tenga exactamente esa longitud usando find
// Ej: si recibe ['sol', 'luna', 'mar'] y 3 devuelve 'sol'

function buscarPalabraConLongitud(wordsList, number) {

    const sameWord = wordsList.find((word) => {

        return word.length === number
    })
    return sameWord
}

// Ejercicio 13
// Crea una funcion buscarPrimerVerdadero que reciba un array de booleanos
// y devuelva el primer valor true usando find
// Ej: si recibe [false, false, true, true] devuelve true

function buscarPrimerVerdadero(booelansList) {

    const trueWord = booelansList.find((boolean) => {

        return boolean === true
    })
    return trueWord
}

// Ejercicio 14
// Crea una funcion buscarPrimerFalso que reciba un array de booleanos
// y devuelva el primer valor false usando find
// Ej: si recibe [true, true, false, false] devuelve false

function buscarPrimerFalso(booelansList) {

    const falseWord = booelansList.find((boolean) => {

        return boolean === false
    })
    return falseWord
}

// Ejercicio 15
// Crea una funcion buscarPrimerParYMayorQue que reciba un array de numeros y un limite
// y devuelva el primer numero que sea par y a la vez mayor que ese limite, usando find
// Ej: si recibe [3, 5, 8, 11, 14] y 6 devuelve 8

function buscarPrimerParYMayorQue(numbersList, limit) {

    const numberMixed = numbersList.find((number) => {

        return number % 2 === 0 && number > limit
    })
    return numberMixed
}