// Ejercicio 1
// Crea una funcion obtenerCiudad que reciba un usuario con una propiedad direccion
// que tiene una key ciudad, y devuelva esa ciudad
// Ej: si recibe { nombre: 'David', direccion: { ciudad: 'Madrid' } } devuelve 'Madrid'

function obtenerCiudad (object) {
    return object.direccion.ciudad
}

// Ejercicio 2
// Crea una funcion obtenerCalle que reciba un usuario con una propiedad direccion
// que tiene una key calle, y devuelva esa calle
// Ej: si recibe { nombre: 'David', direccion: { calle: 'Gran Via' } } devuelve 'Gran Via'

function obtenerCalle (object) {
    return object.direccion.calle
}

// Ejercicio 3
// Crea una funcion obtenerCodigoPostal que reciba un usuario con una propiedad direccion
// que tiene una key codigoPostal, y devuelva ese codigo postal
// Ej: si recibe { nombre: 'David', direccion: { codigoPostal: '28013' } } devuelve '28013'

function obtenerCodigoPostal (object) {
    return object.direccion.codigoPostal
}

// Ejercicio 4
// Crea una funcion obtenerEmpresa que reciba un usuario con una propiedad trabajo
// que tiene una key empresa, y devuelva esa empresa
// Ej: si recibe { nombre: 'David', trabajo: { empresa: 'Google' } } devuelve 'Google'

function obtenerEmpresa (object) {
return object.trabajo.empresa
}

// Ejercicio 5
// Crea una funcion obtenerCargo que reciba un usuario con una propiedad trabajo
// que tiene una key cargo, y devuelva ese cargo
// Ej: si recibe { nombre: 'David', trabajo: { cargo: 'Desarrollador' } } devuelve 'Desarrollador'

function obtenerCargo (object) {
    return object.trabajo.cargo;
}

// Ejercicio 6
// Crea una funcion obtenerNombreAutor que reciba un libro con una propiedad autor
// que tiene una key nombre, y devuelva ese nombre
// Ej: si recibe { titulo: 'Dune', autor: { nombre: 'Frank Herbert' } } devuelve 'Frank Herbert'

function obtenerNombreAutor (object) {
    return object.autor.nombre
}

// Ejercicio 7
// Crea una funcion obtenerPaisAutor que reciba un libro con una propiedad autor
// que tiene una key pais, y devuelva ese pais
// Ej: si recibe { titulo: 'Dune', autor: { nombre: 'Frank Herbert', pais: 'EEUU' } } devuelve 'EEUU'

function obtenerPaisAutor (object) {
    return object.autor.pais;
}

// Ejercicio 8
// Crea una funcion mismaCiudad que reciba dos usuarios con una propiedad direccion
// que tiene una key ciudad, y devuelva true si ambos viven en la misma ciudad
// Ej: si recibe { direccion: { ciudad: 'Madrid' } } y { direccion: { ciudad: 'Madrid' } } devuelve true
// Ej: si recibe { direccion: { ciudad: 'Madrid' } } y { direccion: { ciudad: 'Barcelona' } } devuelve false

function mismaCiudad (objectOne, objectTwo) {
  if (objectOne.direccion.ciudad === objectTwo.direccion.ciudad) {
    return true
} else{
  return false
}
}

// Ejercicio 9
// Crea una funcion mismaEmpresa que reciba dos usuarios con una propiedad trabajo
// que tiene una key empresa, y devuelva true si trabajan en la misma empresa
// Ej: si recibe { trabajo: { empresa: 'Google' } } y { trabajo: { empresa: 'Google' } } devuelve true
// Ej: si recibe { trabajo: { empresa: 'Google' } } y { trabajo: { empresa: 'Apple' } } devuelve false

function mismaEmpresa (objectOne, objectTwo) {
     if (objectOne.trabajo.empresa === objectTwo.trabajo.empresa) {
    return true
} else {
  return false
}
}

// Ejercicio 10
// Crea una funcion salarioTotal que reciba un usuario con una propiedad trabajo
// que tiene las keys salarioBase y bonus, y devuelva la suma de ambos
// Ej: si recibe { trabajo: { salarioBase: 2000, bonus: 500 } } devuelve 2500

function salarioTotal (object) {
    let total = 0
    total = object.trabajo.salarioBase + object.trabajo.bonus;
    return total
} 


// Ejercicio 11
// Crea una funcion nombreCompletoAutor que reciba un libro con una propiedad autor
// que tiene las keys nombre y apellido, y devuelva ambos separados por un espacio
// Ej: si recibe { autor: { nombre: 'Frank', apellido: 'Herbert' } } devuelve 'Frank Herbert'

function nombreCompletoAutor (object) {
    return object.autor.nombre + ' ' + object.autor.apellido
}

// Ejercicio 12
// Crea una funcion cambiarCiudad que reciba un usuario y una nueva ciudad
// y devuelva el usuario con la ciudad actualizada dentro de direccion
// Ej: si recibe { nombre: 'David', direccion: { ciudad: 'Madrid' } } y 'Barcelona'
// devuelve { nombre: 'David', direccion: { ciudad: 'Barcelona' } }
// { ...usuario, direccion: { ...usuario.direccion, ciudad: nuevaCiudad } }

function cambiarCiudad(object, nuevaCiudad) {
  return {
    ...object,
    direccion: {
      ...object.direccion,
      ciudad: nuevaCiudad
    }
  }
}
