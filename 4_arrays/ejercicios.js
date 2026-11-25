// Ejercicio 1
// Crea una funcion primerElemento que reciba un array y devuelva su primer elemento
// Ej: si recibe [10, 20, 30] devuelve 10

function primerElemento (array) { 
  return array [0];
}

// Ejercicio 2
// Crea una funcion ultimoElemento que reciba un array y devuelva su ultimo elemento
// Ej: si recibe [10, 20, 30] devuelve 30

function ultimoElemento (array) {
    return array[array.length - 1];
}

// Ejercicio 3
// Crea una funcion segundoElemento que reciba un array y devuelva su segundo elemento
// Ej: si recibe [10, 20, 30] devuelve 20

function segundoElemento (array) {
  return array[1];
}

// Ejercicio 4
// Crea una funcion penultimoElemento que reciba un array y devuelva el penultimo elemento
// Ej: si recibe [10, 20, 30, 40] devuelve 30

function penultimoElemento (array) {
  return array [array.length -2]
}

// Ejercicio 5
// Crea una funcion elementoEnPosicion que reciba un array y un numero
// y devuelva el elemento que esta en esa posicion
// Ej: si recibe ['A', 'B', 'C', 'D'] y 2 devuelve 'C'

function elementoEnPosicion (array, number) {
  return array [number];
}

// Ejercicio 6
// Crea una funcion longitudArray que reciba un array y devuelva su longitud
// Ej: si recibe [1, 2, 3, 4, 5] devuelve 5

function longitudArray (array) {
  return array.length;
}

// Ejercicio 7
// Crea una funcion aniadirAlFinal que reciba un array y un elemento
// y devuelva el array con ese elemento añadido al final
// Ej: si recibe [1, 2, 3] y 4 devuelve [1, 2, 3, 4]

function aniadirAlFinal (array, elemento) {
  array.push(elemento);
  return array
}

// Ejercicio 8
// Crea una funcion aniadirAlPrincipio que reciba un array y un elemento
// y devuelva el array con ese elemento añadido al principio
// Ej: si recibe [2, 3, 4] y 1 devuelve [1, 2, 3, 4]

function aniadirAlPrincipio (array, elemento) {
  array.unshift(elemento);
  return array
}


// Ejercicio 9
// Crea una funcion aniadirDosAlFinal que reciba un array y dos elementos (a, b)
// y devuelva el array con esos dos elementos añadidos al final
// Ej: si recibe [1, 2] y 3, 4 devuelve [1, 2, 3, 4]

function aniadirDosAlFinal (array, elementOne, elementTwo) {
  array.push(elementOne, elementTwo);
  return array;
}

// Ejercicio 10
// Crea una funcion quitarUltimo que reciba un array
// y devuelva ese array sin el ultimo elemento
// Ej: si recibe [1, 2, 3, 4] devuelve [1, 2, 3]

function quitarUltimo (array) {
  array.pop();
  return array;
}

// Ejercicio 11
// Crea una funcion quitarPrimero que reciba un array
// y devuelva ese array sin el primer elemento
// Ej: si recibe [1, 2, 3, 4] devuelve [2, 3, 4]

function quitarPrimero (array) {
  array.shift()
  return array;
}

// Ejercicio 12
// Crea una funcion crearArrayVacio que no reciba nada y devuelva un array vacio
// Ej: devuelve []

function crearArrayVacio () {
  return [];
}

// Ejercicio 13
// Crea una funcion crearArrayConUnElemento que reciba un elemento
// y devuelva un array con ese unico elemento dentro
// Ej: si recibe 'Hola' devuelve ['Hola']

function crearArrayConUnElemento(elemento) {
  return [elemento];
}


// Ejercicio 14
// Crea una funcion crearArrayConTresElementos que reciba tres parametros (a, b, c)
// y devuelva un array con esos tres elementos
// Ej: si recibe 1, 2, 3 devuelve [1, 2, 3]

function crearArrayConTresElementos (a, b, c) {
  return [a, b, c]
}

// Ejercicio 15
// Crea una funcion contieneElemento que reciba un array y un elemento
// y devuelva true si el elemento esta en el array o false si no esta
// Ej: si recibe [1, 2, 3] y 2 devuelve true
// Ej: si recibe [1, 2, 3] y 5 devuelve false

function contieneElemento (array, elemento) {
  if (array.includes(elemento)) {
    return true;
  } else {
    return false
  }
}

// Ejercicio 16
// Crea una funcion posicionDeElemento que reciba un array y un elemento
// y devuelva la posicion en la que se encuentra ese elemento
// Si el elemento no existe devuelve -1
// Ej: si recibe ['A', 'B', 'C'] y 'B' devuelve 1

function posicionDeElemento (array, element) {
  return array.indexOf(element)
}


// Ejercicio 17
// Crea una funcion unirDosArrays que reciba dos arrays y los devuelva unidos en uno solo
// Ej: si recibe [1, 2] y [3, 4] devuelve [1, 2, 3, 4]

function unirDosArrays(arrayOne, arrayTwo) { 
  return arrayOne.concat(arrayTwo)
 }

// Ejercicio 18
// Crea una funcion parteDelArray que reciba un array, un inicio y un fin
// y devuelva solo los elementos entre esas posiciones (sin incluir el fin)
// Ej: si recibe [1, 2, 3, 4, 5], 1 y 3 devuelve [2, 3]
// Ayuda: slice

function parteDelArray(array, inicio, fin) {
  return array.slice(inicio, fin);
}

// Ejercicio 19
// Crea una funcion sumarTodosLosNumeros que reciba un array de numeros
// y devuelva la suma de todos ellos
// Ej: si recibe [1, 2, 3, 4] devuelve 10

function sumarTodosLosNumeros(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }

  return suma;
}

// Ejercicio 20
// Crea una funcion mayorDelArray que reciba un array de numeros
// y devuelva el numero mas grande
// Ej: si recibe [3, 1, 9, 2] devuelve 9
// Ayuda: Math.max

function mayorDelArray(array) {
  return Math.max(...array);
}


// Ejercicio 21
// Crea una funcion arrayAlReves que reciba un array y lo devuelva al reves
// Ej: si recibe [1, 2, 3] devuelve [3, 2, 1]
// Ayuda: reverse

function arrayAlReves(array) {
  return array.reverse();
}

// Ejercicio 22
// Crea una funcion reemplazarUltimoElemento que reciba un array y un elemento
// y devuelva el array con su ultimo elemento reemplazado por el nuevo
// Ej: si recibe [1, 2, 3] y 99 devuelve [1, 2, 99]

function reemplazarUltimoElemento(array, elemento) {
  array[array.length - 1] = elemento;
  return array;
}