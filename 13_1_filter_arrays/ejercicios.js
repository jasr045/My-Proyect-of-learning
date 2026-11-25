// Ejercicio 1
// Crea una funcion filtrarPares que reciba un array de numeros
// y devuelva un array solo con los numeros pares

function filtrarPares (array) {
    const numeros = array.filter ( (cadaParametro) => {
        return cadaParametro %2 === 0
    })
    return numeros
}

// Ejercicio 2
// Crea una funcion filtrarImpares que reciba un array de numeros
// y devuelva un array solo con los numeros impares

function filtrarImpares (array) {
    const numbers = array.filter ( (parameters) => {
      return parameters %2 !== 0
    })
    return numbers
} 

// Ejercicio 3
// Crea una funcion filtrarPositivos que reciba un array de numeros
// (puede contener negativos) y devuelva un array solo con los positivos

function filtrarPositivos (array) {
    const numbers = array.filter ( (parameters) => {
      return parameters > 0
    })
    return numbers
} 

// Ejercicio 4
// Crea una funcion filtrarNegativos que reciba un array de numeros
// y devuelva un array solo con los negativos

function filtrarNegativos (array) {
    const numbers = array.filter ( (parameters) => {
      return parameters < 0
    })
    return numbers
} 


// Ejercicio 5
// Crea una funcion filtrarMayoresQue que reciba un array de numeros y un limite
// y devuelva un array solo con los numeros mayores que ese limite

function filtrarMayoresQue (array, limit) {
    const numbers = array.filter ( (parameters) => {
      return parameters > limit
    })
    return numbers
} 

// Ejercicio 6
// Crea una funcion filtrarMenoresQue que reciba un array de numeros y un limite
// y devuelva un array solo con los numeros menores que ese limite

function filtrarMenoresQue (array, limit) {
    const numbers = array.filter ( (parameters) => {
      return parameters < limit
    })
    return numbers
} 

// Ejercicio 7
// Crea una funcion filtrarMultiplosDe que reciba un array de numeros y un divisor
// y devuelva un array solo con los numeros que son multiplos de ese divisor

function filtrarMultiplosDe(array, divider) {
  const numbers = array.filter((parameters) => {
    return parameters % divider === 0
  })

  return numbers
}

// Ejercicio 8
// Crea una funcion filtrarPalabrasLargas que reciba un array de palabras
// y devuelva un array solo con las que tienen mas de 4 letras

function filtrarPalabrasLargas(array) {
  const words = array.filter((word) => {
    return word.length > 4
  })

  return words
}

// Ejercicio 9
// Crea una funcion filtrarPalabrasCortas que reciba un array de palabras
// y devuelva un array solo con las que tienen 3 letras o menos

function filtrarPalabrasCortas (array) {
    const words = array.filter( (word) => {
        return word.length <= 3
    })
    return words
}

// Ejercicio 10
// Crea una funcion filtrarPalabrasQueEmpiezanPor que reciba un array de palabras y una letra
// y devuelva un array solo con las palabras que empiezan por esa letra

function filtrarPalabrasQueEmpiezanPor (array, letter) {
    const words = array.filter( (word) => {
        return word.startsWith(letter)
    })
    return words
}

// Ejercicio 11
// Crea una funcion filtrarPalabrasQueContienen que reciba un array de palabras y un texto
// y devuelva un array solo con las palabras que contienen ese texto

function filtrarPalabrasQueContienen(array, text) {
  const words = array.filter((word) => {
    return word.includes(text)
  })

  return words
}

// Ejercicio 12
// Crea una funcion filtrarPalabrasConLongitud que reciba un array de palabras y un numero
// y devuelva un array solo con las palabras que tienen exactamente esa longitud

function filtrarPalabrasConLongitud(array, number) {
  const words = array.filter((word) => {
    return word.length === number
  })

  return words
}

// Ejercicio 13
// Crea una funcion filtrarVerdaderos que reciba un array de booleanos
// y devuelva un array solo con los valores true

function filtrarVerdaderos (array) {
  const booleanos = array.filter((booleano) => {
    return booleano === true
  })

  return booleanos
}

// Ejercicio 14
// Crea una funcion filtrarFalsos que reciba un array de booleanos
// y devuelva un array solo con los valores false

function filtrarFalsos (array) {
  const booleanos = array.filter((booleano) => {
    return booleano === false
  })

  return booleanos
}

// Ejercicio 15
// Crea una funcion contarPares que reciba un array de numeros
// y devuelva cuantos de ellos son pares

function contarPares (array) {
  const numbers = array.filter((number) => {
    return number %2 === 0
  })

  return numbers.length
}
