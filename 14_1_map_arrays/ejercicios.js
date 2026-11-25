// Ejercicio 1
// Crea una funcion duplicarNumeros que reciba un array de numeros
// y devuelva un array con cada numero multiplicado por 2
// Ej: si recibe [1, 2, 3] devuelve [2, 4, 6]

function duplicarNumeros(doubleNumbers) {

    const result = doubleNumbers.map((number) => {
        return number * 2
    })
    return result
}

// Ejercicio 2
// Crea una funcion triplicarNumeros que reciba un array de numeros
// y devuelva un array con cada numero multiplicado por 3
// Ej: si recibe [1, 2, 3] devuelve [3, 6, 9]

function triplicarNumeros(triplenumbers) {

    const result = triplenumbers.map((number) => {
        return number * 3
    })
    return result
}

// Ejercicio 3
// Crea una funcion elevarAlCuadrado que reciba un array de numeros
// y devuelva un array con cada numero elevado al cuadrado
// Ej: si recibe [1, 2, 3, 4] devuelve [1, 4, 9, 16]

function elevarAlCuadrado(squaredNumbers) {

    const result = squaredNumbers.map((number) => {
        return number * number
    })
    return result
}

// Ejercicio 4
// Crea una funcion sumarNumero que reciba un array de numeros y un numero a sumar
// y devuelva un array con el resultado de sumarle ese numero a cada elemento
// Ej: si recibe [1, 2, 3] y 5 devuelve [6, 7, 8]

function sumarNumero(summedNumbers, added) {

    const result = summedNumbers.map((number) => {
        return number + added
    })
    return result
}

// Ejercicio 5
// Crea una funcion restarNumero que reciba un array de numeros y un numero a restar
// y devuelva un array con el resultado de restarle ese numero a cada elemento
// Ej: si recibe [10, 20, 30] y 5 devuelve [5, 15, 25]

function restarNumero(subtractedNumbers, subtracted) {

    const result = subtractedNumbers.map((number) => {
        return number - subtracted
    })
    return result
}

// Ejercicio 6
// Crea una funcion multiplicarPor que reciba un array de numeros y un numero
// y devuelva un array con cada elemento multiplicado por ese numero
// Ej: si recibe [1, 2, 3] y 4 devuelve [4, 8, 12]

function multiplicarPor(multipliedNumbers, multiplier) {

    const result = multipliedNumbers.map((number) => {
        return number * multiplier
    })
    return result
}

// Ejercicio 7
// Crea una funcion convertirAValorAbsoluto que reciba un array de numeros
// (puede contener negativos) y devuelva un array con el valor absoluto de cada uno
// Ej: si recibe [3, -5, -2, 7] devuelve [3, 5, 2, 7]

function convertirAValorAbsoluto(absoluteNumbers) {

    const result = absoluteNumbers.map((number) => {
        return Math.abs(number)
    })
    return result
}

// Ejercicio 8
// Crea una funcion convertirANegativo que reciba un array de numeros
// y devuelva un array con cada numero convertido en negativo
// Ej: si recibe [3, -5, 2] devuelve [-3, -5, -2]

function convertirANegativo(negativeList) {

    const result = negativeList.map((number) => {
        return -Math.abs(number)
    })
    return result
}

// Ejercicio 9
// Crea una funcion palabrasAMayusculas que reciba un array de palabras
// y devuelva un array con cada palabra en mayusculas
// Ej: si recibe ['sol', 'mar'] devuelve ['SOL', 'MAR']

function palabrasAMayusculas(wordsList) {

    const result = wordsList.map((word) => {
        return word.toUpperCase()
    })
    return result
}

// Ejercicio 10
// Crea una funcion palabrasAMinusculas que reciba un array de palabras
// y devuelva un array con cada palabra en minusculas
// Ej: si recibe ['SOL', 'Mar'] devuelve ['sol', 'mar']

function palabrasAMinusculas(wordsList) {

    const result = wordsList.map((word) => {
        return word.toLowerCase()
    })
    return result
}

// Ejercicio 11
// Crea una funcion obtenerLongitudes que reciba un array de palabras
// y devuelva un array con la longitud de cada palabra
// Ej: si recibe ['sol', 'ciudad', 'mar'] devuelve [3, 6, 3]

function obtenerLongitudes (wordsList) {
  const result = wordsList.map( (word) => {
    return word.length
  })
  return result 
}

// Ejercicio 12
// Crea una funcion anadirPrefijo que reciba un array de palabras y un prefijo
// y devuelva un array con el prefijo añadido al principio de cada palabra
// Ej: si recibe ['casa', 'coche'] y 'mi ' devuelve ['mi casa', 'mi coche']

function anadirPrefijo (wordsList, prefix) {
  const result = wordsList.map( (word) => {
    return prefix + word
  })
  return result 
}

// Ejercicio 13
// Crea una funcion anadirSufijo que reciba un array de palabras y un sufijo
// y devuelva un array con el sufijo añadido al final de cada palabra
// Ej: si recibe ['perro', 'gato'] y 's' devuelve ['perros', 'gatos']

function anadirSufijo (wordsList, suffix) {
  const result = wordsList.map( (word) => {
    return word + suffix
  })
  return result 
}

// Ejercicio 14
// Crea una funcion negarBooleanos que reciba un array de booleanos
// y devuelva un array con cada valor negado
// Ej: si recibe [true, false, true] devuelve [false, true, false]

function negarBooleanos (booleanList) {
  const result = booleanList.map( (boolean) => {
    return !boolean
  })
  return result 
}

// Ejercicio 15
// Crea una funcion booleanosATexto que reciba un array de booleanos
// y devuelva un array de textos: 'si' cuando el valor es true y 'no' cuando es false
// Ej: si recibe [true, false, true] devuelve ['si', 'no', 'si']

function booleanosATexto(booleanList) {
  const result = booleanList.map((boolean) => {
    return boolean ? "si" : "no"
  })
  return result
}
