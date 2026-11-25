// Ejercicio 1
// Crea una funcion filtrarPares que reciba un array de objetos con key valor
// y devuelva un array solo con los objetos cuyo valor es par
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }, { valor: 4 }] devuelve [{ valor: 2 }, { valor: 4 }]

function filtrarPares (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.valor %2 === 0
})
  return resultado
}

// Ejercicio 2
// Crea una funcion filtrarImpares que reciba un array de objetos con key valor
// y devuelva un array solo con los objetos cuyo valor es impar
// Ej: si recibe [{ valor: 1 }, { valor: 2 }, { valor: 3 }, { valor: 4 }] devuelve [{ valor: 1 }, { valor: 3 }]

function filtrarImpares (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.valor %2 !== 0
})
  return resultado
}

// Ejercicio 3
// Crea una funcion filtrarPositivos que reciba un array de objetos con key valor
// (puede contener negativos) y devuelva un array solo con los objetos cuyo valor es positivo
// Ej: si recibe [{ valor: 3 }, { valor: -1 }, { valor: 5 }, { valor: -2 }] devuelve [{ valor: 3 }, { valor: 5 }]

function filtrarPositivos (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.valor > 0
})
  return resultado
}

// Ejercicio 4
// Crea una funcion filtrarNegativos que reciba un array de objetos con key valor
// y devuelva un array solo con los objetos cuyo valor es negativo
// Ej: si recibe [{ valor: 3 }, { valor: -1 }, { valor: 5 }, { valor: -2 }] devuelve [{ valor: -1 }, { valor: -2 }]

function filtrarNegativos (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.valor < 0
})
  return resultado
}

// Ejercicio 5
// Crea una funcion filtrarMayoresQue que reciba un array de objetos con key valor y un limite
// y devuelva un array solo con los objetos cuyo valor es mayor que ese limite
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve [{ valor: 10 }, { valor: 25 }]

function filtrarMayoresQue (objectList, limit) {
const resultado = objectList.filter ( (object) => {
  return object.valor > limit
})
  return resultado
}

// Ejercicio 6
// Crea una funcion filtrarMenoresQue que reciba un array de objetos con key valor y un limite
// y devuelva un array solo con los objetos cuyo valor es menor que ese limite
// Ej: si recibe [{ valor: 3 }, { valor: 10 }, { valor: 7 }, { valor: 25 }] y 8 devuelve [{ valor: 3 }, { valor: 7 }]

function filtrarMenoresQue (objectList, limit) {
const resultado = objectList.filter ( (object) => {
  return object.valor < limit
})
  return resultado
}

// Ejercicio 7
// Crea una funcion filtrarPalabrasLargas que reciba un array de objetos con key palabra
// y devuelva un array solo con los objetos cuya palabra tiene mas de 4 letras
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }, { palabra: 'mar' }, { palabra: 'puerta' }] devuelve [{ palabra: 'ciudad' }, { palabra: 'puerta' }]

function filtrarPalabrasLargas (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.palabra.length > 4
})
  return resultado
}

// Ejercicio 8
// Crea una funcion filtrarPalabrasCortas que reciba un array de objetos con key palabra
// y devuelva un array solo con los objetos cuya palabra tiene 3 letras o menos
// Ej: si recibe [{ palabra: 'sol' }, { palabra: 'ciudad' }, { palabra: 'mar' }, { palabra: 'puerta' }] devuelve [{ palabra: 'sol' }, { palabra: 'mar' }]

function filtrarPalabrasCortas (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.palabra.length <= 3
})
  return resultado
}

// Ejercicio 9
// Crea una funcion filtrarPalabrasQueEmpiezanPor que reciba un array de objetos con key palabra y una letra
// y devuelva un array solo con los objetos cuya palabra empieza por esa letra
// Ej: si recibe [{ palabra: 'casa' }, { palabra: 'coche' }, { palabra: 'perro' }, { palabra: 'calle' }] y 'c' devuelve [{ palabra: 'casa' }, { palabra: 'coche' }, { palabra: 'calle' }]

function filtrarPalabrasQueEmpiezanPor (objectList, letter) {
const resultado = objectList.filter ( (object) => {
  return object.palabra.startsWith(letter)
})
  return resultado
}

// Ejercicio 10
// Crea una funcion filtrarPalabrasQueContienen que reciba un array de objetos con key palabra y un texto
// y devuelva un array solo con los objetos cuya palabra contiene ese texto
// Ej: si recibe [{ palabra: 'gato' }, { palabra: 'pelota' }, { palabra: 'gota' }, { palabra: 'mesa' }] y 'ot' devuelve [{ palabra: 'pelota' }, { palabra: 'gota' }]

function filtrarPalabrasQueContienen (objectList, text) {
const resultado = objectList.filter ( (object) => {
  return object.palabra.includes(text)
})
  return resultado
}

// Ejercicio 11
// Crea una funcion filtrarMayoresDeEdad que reciba un array de usuarios con key edad
// y devuelva un array solo con los usuarios con edad mayor o igual a 18
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }, { nombre: 'Luis', edad: 17 }] devuelve [{ nombre: 'David', edad: 30 }]

function filtrarMayoresDeEdad (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.edad >= 18
})
  return resultado
}

// Ejercicio 12
// Crea una funcion filtrarMenoresDeEdad que reciba un array de usuarios con key edad
// y devuelva un array solo con los usuarios con edad menor de 18
// Ej: si recibe [{ nombre: 'David', edad: 30 }, { nombre: 'Ana', edad: 15 }, { nombre: 'Luis', edad: 17 }] devuelve [{ nombre: 'Ana', edad: 15 }, { nombre: 'Luis', edad: 17 }]

function filtrarMenoresDeEdad (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.edad < 18
})
  return resultado
}

// Ejercicio 13
// Crea una funcion filtrarActivos que reciba un array de usuarios con key activo
// y devuelva un array solo con los usuarios activos (activo es true)
// Ej: si recibe [{ nombre: 'David', activo: true }, { nombre: 'Ana', activo: false }, { nombre: 'Luis', activo: true }] devuelve [{ nombre: 'David', activo: true }, { nombre: 'Luis', activo: true }]

function filtrarActivos (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.activo === true
})
  return resultado
}

// Ejercicio 14
// Crea una funcion filtrarInactivos que reciba un array de usuarios con key activo
// y devuelva un array solo con los usuarios inactivos (activo es false)
// Ej: si recibe [{ nombre: 'David', activo: true }, { nombre: 'Ana', activo: false }, { nombre: 'Luis', activo: true }] devuelve [{ nombre: 'Ana', activo: false }]

function filtrarInactivos (objectList) {
const resultado = objectList.filter ( (object) => {
  return object.activo === false
})
  return resultado
}

// Ejercicio 15
// Crea una funcion filtrarProductosBaratos que reciba un array de productos con key precio y un limite
// y devuelva un array solo con los productos cuyo precio es menor que ese limite
// Ej: si recibe [{ nombre: 'Camisa', precio: 20 }, { nombre: 'Pantalon', precio: 35 }, { nombre: 'Zapatos', precio: 50 }] y 30 devuelve [{ nombre: 'Camisa', precio: 20 }]

function filtrarProductosBaratos (objectList, limit) {
const resultado = objectList.filter ( (object) => {
  return object.precio < limit
})
  return resultado
}