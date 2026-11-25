// Ejercicio 1
// Crea una funcion sumarNumeros que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor (numero),
// y devuelva la suma de los valores de todos los usuarios

function sumarNumeros (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    suma = suma + array[i].estadisticas.valor
  }
  return suma
}

// Ejercicio 2
// Crea una funcion sumarDobles que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor (numero),
// y devuelva la suma del doble de cada valor

function sumarDobles (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    suma = suma + (array[i].estadisticas.valor *2)
  }
  return suma
}

// Ejercicio 3
// Crea una funcion sumarCuadrados que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor (numero),
// y devuelva la suma del cuadrado de cada valor

function sumarCuadrados (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    suma = suma + (array[i].estadisticas.valor * array[i].estadisticas.valor)
  }
  return suma
}

// Ejercicio 4
// Crea una funcion sumarPositivos que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor (numero, que puede
// ser positivo o negativo), y devuelva la suma solo de los valores positivos

function sumarPositivos (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].estadisticas.valor > 0) {
        suma = suma + array[i].estadisticas.valor
  }
  }
  return suma
}

// Ejercicio 5
// Crea una funcion sumarPares que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor (numero),
// y devuelva la suma solo de los valores pares

function sumarPares (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].estadisticas.valor %2 === 0) {
        suma = suma + array[i].estadisticas.valor
  }
  }
  return suma
}

// Ejercicio 6
// Crea una funcion sumarImpares que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor (numero),
// y devuelva la suma solo de los valores impares

function sumarImpares (array) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].estadisticas.valor %2 ==! 0) {
        suma = suma + array[i].estadisticas.valor
  }
  }
  return suma
}


// Ejercicio 7
// Crea una funcion sumarMayoresQue que reciba un array de usuarios (donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor numero) y un
// segundo parametro limite (numero), y devuelva la suma solo de los valores mayores que ese limite

function sumarMayoresQue (array, limit) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].estadisticas.valor > limit) {
        suma = suma + array[i].estadisticas.valor
    }
  }
  return suma
}

// Ejercicio 8
// Crea una funcion sumarMenoresQue que reciba un array de usuarios (donde cada usuario es un objeto
// con una propiedad estadisticas que a su vez es un objeto con una propiedad valor numero) y un
// segundo parametro limite (numero), y devuelva la suma solo de los valores menores que ese limite

function sumarMenoresQue (array, limit) {
  let suma = 0
  for (let i=0; i < array.length; i++) {
    if (array[i].estadisticas.valor < limit) {
        suma = suma + array[i].estadisticas.valor
    }
  }
  return suma
}

// Ejercicio 9
// Crea una funcion sumarLongitudes que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad perfil que a su vez es un objeto con una propiedad palabra (string),
// y devuelva la suma de la longitud de todas las palabras

function sumarLongitudes (users) {

let suma = 0
  for (let i=0; i < users.length; i++) {
    suma = suma + users[i].perfil.palabra.length
  }
  return suma
}

// Ejercicio 10
// Crea una funcion sumarLongitudesDobles que reciba un array de usuarios, donde cada usuario es un objeto
// con una propiedad perfil que a su vez es un objeto con una propiedad palabra (string),
// y devuelva la suma del doble de la longitud de cada palabra

function sumarLongitudesDobles (users) {

let suma = 0
  for (let i=0; i < users.length; i++) {
    suma = suma + (users[i].perfil.palabra.length *2)
  }
  return suma
}

// Ejercicio 11
// Crea una funcion sumarLongitudesPalabrasLargas que reciba un array de usuarios, donde cada usuario es
// un objeto con una propiedad perfil que a su vez es un objeto con una propiedad palabra (string),
// y devuelva la suma de la longitud solo de las palabras que tengan mas de 4 letras

function sumarLongitudesPalabrasLargas (users) {

let suma = 0
  for (let i=0; i < users.length; i++) {
    if (users[i].perfil.palabra.length > 4){
      suma = suma + users[i].perfil.palabra.length
    }
  }
  return suma
}

// Ejercicio 12
// Crea una funcion sumarLongitudesPalabrasCortas que reciba un array de usuarios, donde cada usuario es
// un objeto con una propiedad perfil que a su vez es un objeto con una propiedad palabra (string),
// y devuelva la suma de la longitud solo de las palabras que tengan 3 letras o menos

function sumarLongitudesPalabrasCortas (users) {

let suma = 0
  for (let i=0; i < users.length; i++) {
    if (users[i].perfil.palabra.length <= 3){
      suma = suma + users[i].perfil.palabra.length
    }
  }
  return suma
}