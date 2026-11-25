// Ejercicio 1
// Crea una funcion sumarNumeros que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y devuelva la suma de todos los numeros de todos los objetos
// Ej: si recibe [{ numeros: [1, 2, 3] }, { numeros: [4, 5] }] devuelve 15

function sumarNumeros (array) {
  let suma = 0
for (i=0; i < array.length; i++) {
  for (let a=0; a < array[i].numeros.length; a++) {
      suma += array[i].numeros[a]
  }
}
  return suma
}

// Ejercicio 2
// Crea una funcion sumarDobles que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y devuelva la suma del doble de cada numero de todos los objetos
// Ej: si recibe [{ numeros: [1, 2, 3] }, { numeros: [4, 5] }] devuelve 30 (2+4+6+8+10)

function sumarDobles (array) {
  let suma = 0
for (i=0; i < array.length; i++) {
  for (let a=0; a < array[i].numeros.length; a++) {
      suma += (array[i].numeros[a] *2)
  }
}
  return suma
}

// Ejercicio 3
// Crea una funcion sumarCuadrados que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y devuelva la suma del cuadrado de cada numero de todos los objetos
// Ej: si recibe [{ numeros: [1, 2, 3] }, { numeros: [4] }] devuelve 30 (1+4+9+16)

function sumarCuadrados (array) {
  let suma = 0
for (i=0; i < array.length; i++) {
  for (let a=0; a < array[i].numeros.length; a++) {
      suma += (array[i].numeros[a] * array[i].numeros[a])
  }
}
  return suma
}

// Ejercicio 4
// Crea una funcion sumarPositivos que reciba un array de objetos, cada uno con una key numeros que contiene un array
// (puede contener negativos) y devuelva la suma solo de los valores positivos de todos los objetos
// Ej: si recibe [{ numeros: [3, -1, 5] }, { numeros: [-2, 4] }] devuelve 12

function sumarPositivos (array) {
  let suma = 0
for (i=0; i < array.length; i++) {
  for (let a=0; a < array[i].numeros.length; a++) {
    if(array[i].numeros[a] > 0) {
            suma += array[i].numeros[a]
    }

  }
}
  return suma
}

// Ejercicio 5
// Crea una funcion sumarPares que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y devuelva la suma solo de los numeros pares de todos los objetos
// Ej: si recibe [{ numeros: [1, 2, 3, 4] }, { numeros: [5, 6] }] devuelve 12 (2+4+6)

function sumarPares (array) {

    let suma = 0

    for (let i=0; i < array.length; i++) {
        for (a=0; a < array[i].numeros.length; a++) {
          if (array[i].numeros[a] %2 === 0) {
          suma += array[i].numeros[a]
          }
        }
    }
    return suma
}


// Ejercicio 6
// Crea una funcion sumarImpares que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y devuelva la suma solo de los numeros impares de todos los objetos
// Ej: si recibe [{ numeros: [1, 2, 3, 4] }, { numeros: [5, 6] }] devuelve 9 (1+3+5)

function sumarImpares (array) {

    let suma = 0

    for (let i=0; i < array.length; i++) {
        for (a=0; a < array[i].numeros.length; a++) {
          if (array[i].numeros[a] %2 !== 0) {
          suma += array[i].numeros[a]
          }
        }
    }
    return suma
}

// Ejercicio 7
// Crea una funcion sumarMayoresQue que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y un limite, y devuelva la suma solo de los numeros mayores que ese limite de todos los objetos
// Ej: si recibe [{ numeros: [3, 10, 7] }, { numeros: [25, 1] }] y 8 devuelve 35 (10+25)

function sumarMayoresQue (array, limit) {

    let suma = 0
    for (let i=0; i < array.length; i++) {

        for (a=0; a < array[i].numeros.length; a++) {

            if(array[i].numeros[a] > limit) {
             suma += array[i].numeros[a]
            }
        }
    }
    return suma
}

// Ejercicio 8
// Crea una funcion sumarMenoresQue que reciba un array de objetos, cada uno con una key numeros que contiene un array
// y un limite, y devuelva la suma solo de los numeros menores que ese limite de todos los objetos
// Ej: si recibe [{ numeros: [3, 10, 7] }, { numeros: [25, 1] }] y 8 devuelve 11 (3+7+1)

function sumarMenoresQue (array, limit) {

    let suma = 0
    for (let i=0; i < array.length; i++) {

        for (a=0; a < array[i].numeros.length; a++) {

            if(array[i].numeros[a] < limit) {
             suma += array[i].numeros[a]
            }
        }
    }
    return suma
}

// Ejercicio 9
// Crea una funcion sumarLongitudes que reciba un array de objetos, cada uno con una key palabras que contiene un array
// y devuelva la suma de la longitud de todas las palabras de todos los objetos
// Ej: si recibe [{ palabras: ['hola', 'mundo'] }, { palabras: ['sol'] }] devuelve 12 (4+5+3)

function sumarLongitudes (array) {
  
  let suma =0
  for (let i=0; i < array.length; i++) {
    
    for (let a = 0; a < array[i].palabras.length; a++) {
    suma += array[i].palabras[a].length
    }
  }
  return suma
}

// Ejercicio 10
// Crea una funcion sumarLongitudesDobles que reciba un array de objetos, cada uno con una key palabras que contiene un array
// y devuelva la suma del doble de la longitud de cada palabra de todos los objetos
// Ej: si recibe [{ palabras: ['hola', 'mundo'] }, { palabras: ['sol'] }] devuelve 24 (8+10+6)

function sumarLongitudesDobles (array) {
  
  let suma =0
  for (let i=0; i < array.length; i++) {
    
    for (let a = 0; a < array[i].palabras.length; a++) {
    suma += (array[i].palabras[a].length *2)
    }
  }
  return suma
}

// Ejercicio 11
// Crea una funcion sumarLongitudesPalabrasLargas que reciba un array de objetos, cada uno con una key palabras que contiene un array
// y devuelva la suma de la longitud solo de las palabras con mas de 4 letras de todos los objetos
// Ej: si recibe [{ palabras: ['sol', 'ciudad'] }, { palabras: ['mar', 'puerta'] }] devuelve 12 (6+6)

function sumarLongitudesPalabrasLargas (array) {
  
  let suma =0
  for (let i=0; i < array.length; i++) {
    
    for (let a = 0; a < array[i].palabras.length; a++) {
        if (array[i].palabras[a].length > 4) {
    suma += array[i].palabras[a].length
        }

    }
  }
  return suma
}

// Ejercicio 12
// Crea una funcion sumarLongitudesPalabrasCortas que reciba un array de objetos, cada uno con una key palabras 
// que contiene un array
// y devuelva la suma de la longitud solo de las palabras con 3 letras o menos de todos los objetos
// Ej: si recibe [{ palabras: ['sol', 'ciudad'] }, { palabras: ['mar', 'puerta'] }] devuelve 6 (3+3)

function sumarLongitudesPalabrasCortas (array) {
  
  let suma =0
  for (let i=0; i < array.length; i++) {
    
    for (let a = 0; a < array[i].palabras.length; a++) {
        if (array[i].palabras[a].length <= 3) {
    suma += array[i].palabras[a].length
        }

    }
  }
  return suma
}