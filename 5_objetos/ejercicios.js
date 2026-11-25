// Ejercicio 1
// Crea una funcion obtenerNombre que reciba un objeto con una key nombre y devuelva su valor
// Ej: si recibe { nombre: 'David' } devuelve 'David'

function obtenerNombre(object) {
  return object.nombre;
}

// Ejercicio 2
// Crea una funcion obtenerEdad que reciba un objeto con una key edad y devuelva su valor
// Ej: si recibe { edad: 25 } devuelve 25

function obtenerEdad (object) {
  return object.edad;
}

// Ejercicio 3
// Crea una funcion crearPersona que reciba un nombre y una edad
// y devuelva un objeto con esas dos propiedades
// Ej: si recibe 'David' y 30 devuelve { nombre: 'David', edad: 30 }

function crearPersona (nombre, edad) {
  return {nombre, edad}
}

// Ejercicio 5
// Crea una funcion crearProducto que reciba un nombre y un precio
// y devuelva un objeto con esas dos propiedades
// Ej: si recibe 'Camisa' y 20 devuelve { nombre: 'Camisa', precio: 20 }

function crearProducto (nombre, precio) {
    return {nombre, precio}
}

// Ejercicio 6
// Crea una funcion nombreCompleto que reciba un objeto con las keys nombre y apellido
// y devuelva ambos separados por un espacio
// Ej: si recibe { nombre: 'David', apellido: 'Garcia' } devuelve 'David Garcia'

function nombreCompleto (object) {
    return object.nombre + ' ' + object.apellido
}

// Ejercicio 7
// Crea una funcion sumarNumeros que reciba un objeto con las keys numero1 y numero2
// y devuelva la suma de ambos
// Ej: si recibe { numero1: 5, numero2: 10 } devuelve 15

function sumarNumeros(object) {
  return object.numero1 + object.numero2;
}

// Ejercicio 8
// Crea una funcion precioFinal que reciba un objeto con las keys precio y descuento
// y devuelva el precio menos el descuento
// Ej: si recibe { precio: 100, descuento: 20 } devuelve 80

function precioFinal(object) {
  let total = 0;
  total = object.precio - object.descuento;
  return total;
}

// Ejercicio 9
// Crea una funcion esMayorDeEdad que reciba un objeto con una key edad
// y devuelva true si la edad es mayor o igual a 18
// Ej: si recibe { edad: 20 } devuelve true
// Ej: si recibe { edad: 15 } devuelve false

function esMayorDeEdad (object) {
  if (object.edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Ejercicio 10
// Crea una funcion tieneNombre que reciba un objeto con una key nombre
// y devuelva true si el nombre no esta vacio
// Ej: si recibe { nombre: 'David' } devuelve true
// Ej: si recibe { nombre: '' } devuelve false

function tieneNombre (object) {
  if (object.nombre.length > 0) {
    return true;
  } else {
    return false
  }
}

// Ejercicio 11
// Crea una funcion mismosNombres que reciba 2 objetos con una key nombre
// y devuelva true si ambos nombres son iguales
// Ej: si recibe { nombre: 'David' } y { nombre: 'David' } devuelve true
// Ej: si recibe { nombre: 'David' } y { nombre: 'Ana' } devuelve false

function mismosNombres (objectOne, objectTwo) {
  if (objectOne.nombre === objectTwo.nombre) {
    return true
  } else {
    return false
  }
}

// Ejercicio 12
// Crea una funcion elMasJoven que reciba 2 objetos con una key edad
// y devuelva el objeto con la edad menor
// Ej: si recibe { nombre: 'David', edad: 30 } y { nombre: 'Ana', edad: 25 }
// devuelve { nombre: 'Ana', edad: 25 }

function elMasJoven (objectOne, objectTwo) {
  if (objectOne.edad > objectTwo.edad) {
    return objectTwo
  } else {
    return objectOne
  }
}

// Ejercicio 13
// Crea una funcion cambiarNombre que reciba un objeto y un nuevo nombre
// y devuelva el mismo objeto pero con el nombre actualizado
// Ej: si recibe { nombre: 'David', edad: 30 } y 'Ana'
// devuelve { nombre: 'Ana', edad: 30 }
// Ayuda: usa el spread operator { ...obj, nombre: nuevoNombre }

function cambiarNombre(object, objectNew) {
  return {
    ...object,
    nombre: objectNew
  }
}

// Ejercicio 14
// Crea una funcion incrementarEdad que reciba un objeto con una key edad
// y devuelva el mismo objeto pero con la edad incrementada en 1
// Ej: si recibe { nombre: 'David', edad: 30 } devuelve { nombre: 'David', edad: 31 }

function incrementarEdad(object) {
  return {
    ...object,
    edad: object.edad + 1
  }
}

// Ejercicio 15
// Crea una funcion aniadirPrecio que reciba un objeto y un precio
// y devuelva ese objeto con una nueva key precio añadida
// Ej: si recibe { nombre: 'Camisa' } y 20 devuelve { nombre: 'Camisa', precio: 20 }

function aniadirPrecio (object, precio) {
 return { ...object,
  precio
}
}

// Ejercicio 16
// Crea una funcion primerObjeto que reciba un array de objetos y devuelva el primero
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }] devuelve { nombre: 'David' }

function primerObjeto (array) {
  return array[0]
}

// Ejercicio 17
// Crea una funcion obtenerNombreDelPrimero que reciba un array de objetos con key nombre
// y devuelva el nombre del primer objeto
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }] devuelve 'David'

function obtenerNombreDelPrimero (array) {
  return array[0].nombre
}

// Ejercicio 18
// Crea una funcion sumarTodosLosTotales que reciba un array de objetos con key total
// y devuelva la suma de todos los totales
// Ej: si recibe [{ total: 10 }, { total: 5 }, { total: 20 }] devuelve 35

function sumarTodosLosTotales (array) {
  let suma = 0
  for(let i=0; i < array.length; i++) {
   suma = suma + array[i].total
  }
  return suma
}

// Ejercicio 19
// Crea una funcion contarObjetos que reciba un array de objetos y devuelva cuantos hay
// Ej: si recibe [{ nombre: 'David' }, { nombre: 'Ana' }] devuelve 2

function contarObjetos (array) {
  return array.length;
}


// Ejercicio 20
// Crea una funcion todosAdultos que reciba un array de objetos con key edad
// y devuelva true si TODOS tienen 18 o mas años
// Ej: si recibe [{ edad: 20 }, { edad: 30 }] devuelve true
// Ej: si recibe [{ edad: 20 }, { edad: 15 }] devuelve false
// Ayuda: every

function todosAdultos(array) {
  return array.every(function (objeto) {
    return objeto.edad >= 18
  })
}