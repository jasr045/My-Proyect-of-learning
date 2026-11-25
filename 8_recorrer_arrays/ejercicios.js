// Ejercicio 1
// Crea una funcion mostrarNumeros que reciba un array de numeros
// y haga console.log de cada numero del array

function mostrarNumeros (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

// Ejercicio 2
// Crea una funcion mostrarDobles que reciba un array de numeros
// y haga console.log del doble de cada numero del array

function mostrarDobles (array) {
    for (let i=0; i < array.length; i++){
      console.log(array[i] * 2)
    }
}

// Ejercicio 3
// Crea una funcion mostrarSumandoUno que reciba un array de numeros
// y haga console.log de cada numero del array sumandole 1

function mostrarSumandoUno (array) {
    for (let i=0; i < array.length; i++){
      console.log(array[i] + 1)
    }
}

// Ejercicio 4
// Crea una funcion mostrarNumerosGrandes que reciba un array de numeros
// y haga console.log solo de los numeros del array que sean mayores o iguales a 10

function mostrarNumerosGrandes (array) {
    for (let i=0; i < array.length; i++){
      if (array[i] >= 10) {
        console.log(array[i])
      }
    }
}

// Ejercicio 5
// Crea una funcion mostrarPalabras que reciba un array de palabras
// y haga console.log de cada palabra del array

function mostrarPalabras (array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i])
     }
}

// Ejercicio 6
// Crea una funcion mostrarEnMayusculas que reciba un array de palabras
// y haga console.log de cada palabra del array en mayusculas

function mostrarEnMayusculas(array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i].toUpperCase())
     }
}

// Ejercicio 7
// Crea una funcion mostrarConPunto que reciba un array de palabras
// y haga console.log de cada palabra del array con un punto al final

function mostrarConPunto (array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i] + '.')
     }
}

// Ejercicio 8
// Crea una funcion mostrarPalabrasLargas que reciba un array de palabras
// y haga console.log solo de las palabras del array que tengan mas de 4 letras

function mostrarPalabrasLargas (array) {
  for (let i=0; i < array.length; i++){
    if (array[i].length > 4) {
    console.log(array[i])
    }
  }
}

// Ejercicio 9
// Crea una funcion mostrarLongitudes que reciba un array de palabras
// y haga console.log de la longitud de cada palabra del array

function mostrarLongitudes (array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i].length)
  }
}

// Ejercicio 10
// Crea una funcion mostrarLongitudesDobles que reciba un array de palabras
// y haga console.log del doble de la longitud de cada palabra del array

function mostrarLongitudesDobles (array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i].length * 2)
  }
}

// Ejercicio 11
// Crea una funcion mostrarPalabrasCortas que reciba un array de palabras
// y haga console.log solo de las palabras del array que tengan 3 letras o menos

function mostrarPalabrasCortas (array) {
  for (let i=0; i < array.length; i++){
    if ((array[i].length <= 3)){
    console.log(array[i])
    }
  }
}

// Ejercicio 12
// Crea una funcion mostrarPalabraConSuLongitud que reciba un array de palabras
// y haga console.log de cada palabra del array seguida de su longitud, separados por un espacio

function mostrarPalabraConSuLongitud (array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i] + " " + array[i].length)
  }
}