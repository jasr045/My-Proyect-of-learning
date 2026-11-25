// Ejercicio 1
// Crea una funcion sumarNumeros que reciba un array de objetos con key valor
// y devuelva la suma de todos los valores
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }] devuelve 6

function sumarNumeros(array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    suma = suma + array[i].valor
  }
  
  return suma
}

// Ejercicio 2
// Crea una funcion sumarDobles que reciba un array de objetos con key valor
// y devuelva la suma del doble de cada valor
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }] devuelve 12 (2+4+6)

function sumarDobles (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    suma = suma + (array[i].valor *2)
  }
  
  return suma
}

// Ejercicio 3
// Crea una funcion sumarCuadrados que reciba un array de objetos con key valor
// y devuelva la suma del cuadrado de cada valor
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }] devuelve 14 (1+4+9)

function sumarCuadrados (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    suma = suma + (array[i].valor * array[i].valor)
  }
  
  return suma
}

// Ejercicio 4
// Crea una funcion sumarPositivos que reciba un array de objetos con key valor
// (puede contener negativos) y devuelva la suma solo de los valores positivos
// Ej: si recibe [{ valor: 3 }, { valor: -1 }, { valor: 5 }, { valor: -2 }] devuelve 8

function sumarPositivos (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].valor > 0){
    suma = suma + array[i].valor
    }
  }
  
  return suma
}

// Ejercicio 5
// Crea una funcion sumarPares que reciba un array de objetos con key valor
// y devuelva la suma solo de los valores pares
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }, { valor: 4 }, { valor: 5 }] devuelve 6 (2+4)

function sumarPares (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].valor %2 === 0){
    suma = suma + array[i].valor
    }
  }
  
  return suma
}

// Ejercicio 6
// Crea una funcion sumarImpares que reciba un array de objetos con key valor
// y devuelva la suma solo de los valores impares
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }, { valor: 4 }, { valor: 5 }] devuelve 9 (1+3+5)

function sumarImpares (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].valor %2 ==! 0){
    suma = suma + array[i].valor
    }
  }
  
  return suma
}


// Ejercicio 7
// Crea una funcion sumarMayoresQue que reciba un array de objetos con key valor y un limite
// y devuelva la suma solo de los valores mayores que ese limite
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve 35 (10+25)

function sumarMayoresQue (array, limit) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].valor > limit){
    suma = suma + array[i].valor
    }
  }
  
  return suma
}

// Ejercicio 8
// Crea una funcion sumarMenoresQue que reciba un array de objetos con key valor y un limite
// y devuelva la suma solo de los valores menores que ese limite
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve 10 (3+7)

function sumarMenoresQue (array, limit) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].valor < limit){
    suma = suma + array[i].valor
    }
  }
  
  return suma
}


// Ejercicio 9
// Crea una funcion sumarLongitudes que reciba un array de objetos con key palabra
// y devuelva la suma de la longitud de todas las palabras
// Ej: si recibe [{ palabra: 'hola' }, { palabra: 'mundo' }] devuelve 9 (4+5)

function sumarLongitudes(array) {
  
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i].palabra.length
  }
  return suma
}

// Ejercicio 10
// Crea una funcion sumarLongitudesDobles que reciba un array de objetos con key palabra
// y devuelva la suma del doble de la longitud de cada palabra
// Ej: si recibe [{ palabra: 'hola' }, { palabra: 'mundo' }] devuelve 18 (8+10)

function sumarLongitudesDobles (array) {
  
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma = suma + (array[i].palabra.length *2)
  }
  return suma
}

// Ejercicio 11
// Crea una funcion sumarLongitudesPalabrasLargas que reciba un array de objetos con key palabra
// y devuelva la suma de la longitud solo de las que tengan mas de 4 letras
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }, { palabra: 'mar' }, { palabra: 'puerta' }] devuelve 12 (6+6)

function sumarLongitudesPalabrasLargas (array) {
    let suma = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].palabra.length > 4) {
      suma = suma + array[i].palabra.length
    }
  }
  return suma
}

// Ejercicio 12
// Crea una funcion sumarLongitudesPalabrasCortas que reciba un array de objetos con key palabra
// y devuelva la suma de la longitud solo de las que tengan 3 letras o menos
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }, { palabra: 'mar' }, { palabra: 'puerta' }] devuelve 6 (3+3)

function sumarLongitudesPalabrasCortas (array) {
    let suma = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].palabra.length <= 3) {
      suma = suma + array[i].palabra.length
    }
  }
  return suma
}