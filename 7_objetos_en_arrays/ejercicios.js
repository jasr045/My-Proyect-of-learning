// Ejercicio 1
// Crea una funcion primerUsuario que reciba un array de usuarios y devuelva el primero
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 25 }] devuelve { nombre: 'David', edad: 30 }

function primerUsuario (array) {
    return array[0]
}

// Ejercicio 2
// Crea una funcion segundoUsuario que reciba un array de usuarios y devuelva el segundo
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 25 }] devuelve { nombre: 'Ana', edad: 25 }

function segundoUsuario (array) {
    return array[1]
}

// Ejercicio 3
// Crea una funcion ultimoUsuario que reciba un array de usuarios y devuelva el ultimo
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }, { nombre: 'Luis' }] devuelve { nombre: 'Luis' }

function ultimoUsuario(array) {
  return array[array.length - 1]
}

// Ejercicio 4
// Crea una funcion usuarioEnPosicion que reciba un array de usuarios y una posicion
// y devuelva el usuario que esta en esa posicion
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }, { nombre: 'Luis' }] y 1 devuelve { nombre: 'Ana' }

function usuarioEnPosicion(array, position) {
  return array[position]
}

// Ejercicio 5
// Crea una funcion nombreDelPrimero que reciba un array de usuarios con key nombre
// y devuelva el nombre del primer usuario
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }] devuelve 'David'

function nombreDelPrimero (array) {
 return array[0].nombre
}

// Ejercicio 6
// Crea una funcion edadDelPrimero que reciba un array de usuarios con key edad
// y devuelva la edad del primer usuario
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 25 }] devuelve 30

function edadDelPrimero (array) {
  return array[0].edad
}

// Ejercicio 7
// Crea una funcion nombreDelUltimo que reciba un array de usuarios con key nombre
// y devuelva el nombre del ultimo usuario
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }, { nombre: 'Luis' }] devuelve 'Luis'

function nombreDelUltimo (array) {
  return array[array.length -1].nombre
}

// Ejercicio 8
// Crea una funcion edadDelUltimo que reciba un array de usuarios con key edad
// y devuelva la edad del ultimo usuario
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 25 }] devuelve 25

function edadDelUltimo (array) {
  return array[array.length -1].edad
}

// Ejercicio 9
// Crea una funcion nombreEnPosicion que reciba un array de usuarios y una posicion
// y devuelva el nombre del usuario en esa posicion
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }, { nombre: 'Luis' }] y 2 devuelve 'Luis'

function nombreEnPosicion (array, position) {
  return array[position].nombre
}

// Ejercicio 10
// Crea una funcion edadEnPosicion que reciba un array de usuarios y una posicion
// y devuelva la edad del usuario en esa posicion
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 25 }] y 1 devuelve 25

function edadEnPosicion (array, position) {
  return array[position].edad
}

// Ejercicio 11
// Crea una funcion precioDelPrimero que reciba un array de productos con key precio
// y devuelva el precio del primer producto
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }] devuelve 20

function precioDelPrimero (array) {
  return array[0].precio
}

// Ejercicio 12
// Crea una funcion precioDelUltimo que reciba un array de productos con key precio
// y devuelva el precio del ultimo producto
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }] devuelve 35

function precioDelUltimo (array) {
  return array[array.length -1].precio
}