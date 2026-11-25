// Ejercicio 1
// Crea una funcion filtrarUsuariosConMuchosPuntos que reciba un array de usuarios con key puntos (array de numeros)
// y un limite. Devuelve los usuarios cuya suma de puntos es mayor que el limite.
// Ej: si recibe [{ name: 'Alice', puntos: [10, 20] }, { name: 'Bob', puntos: [5, 5] }, { name: 'Charlie', puntos: [50] }] y 25 devuelve [{ name: 'Alice', puntos: [10, 20] }, { name: 'Charlie', puntos: [50] }]

function filtrarUsuariosConMuchosPuntos (users, limit) {
  const result = users.filter ( (user) => {
    
  const sum= user.puntos.reduce((acc, value) => {
    
  return acc + value 
  }, 0)
  
  return sum > limit
  })
  return result
}

// Ejercicio 2
// Crea una funcion filtrarUsuariosConPocosPuntos que reciba un array de usuarios con key puntos (array de numeros)
// y un limite. Devuelve los usuarios cuya suma de puntos es menor que el limite.
// Ej: si recibe [{ name: 'Alice', puntos: [10, 20] }, { name: 'Bob', puntos: [5, 5] }, { name: 'Charlie', puntos: [50] }] y 25 devuelve [{ name: 'Bob', puntos: [5, 5] }]

function filtrarUsuariosConPocosPuntos (users, limit) {
  
  const result = users.filter ( (user) => {
    
  const sum= user.puntos.reduce((acc, value) => {
    
  return acc + value
  }, 0)
  
  return sum < limit
  })
  return result
}

// Ejercicio 3
// Crea una funcion filtrarUsuariosConMuchasTareas que reciba un array de usuarios con key tareas (array)
// y un limite. Devuelve los usuarios cuyo numero de tareas es mayor que el limite.
// Ej: si recibe [{ name: 'Alice', tareas: ['a', 'b', 'c'] }, { name: 'Bob', tareas: ['a'] }, { name: 'Charlie', tareas: ['a', 'b', 'c', 'd'] }] y 2 devuelve [{ name: 'Alice', tareas: ['a', 'b', 'c'] }, { name: 'Charlie', tareas: ['a', 'b', 'c', 'd'] }]

function filtrarUsuariosConMuchasTareas (users, limit) {
  
  const result = users.filter ( (user) => {
    
  return user.tareas.length > limit
  
  })
  return result
}

// Ejercicio 4
// Crea una funcion filtrarUsuariosConPocasTareas que reciba un array de usuarios con key tareas (array)
// y un limite. Devuelve los usuarios cuyo numero de tareas es menor que el limite.
// Ej: si recibe [{ name: 'Alice', tareas: ['a', 'b', 'c'] }, { name: 'Bob', tareas: ['a'] }, { name: 'Charlie', tareas: ['a', 'b', 'c', 'd'] }] y 2 devuelve [{ name: 'Bob', tareas: ['a'] }]

function filtrarUsuariosConPocasTareas (users, limit) {
  
  const result = users.filter ( (user) => {
    
  return user.tareas.length < limit
  
  })
  return result
}

// Ejercicio 5
// Crea una funcion filtrarEquiposConAlgunaVictoriaGrande que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve los equipos que tienen al menos un resultado mayor que el limite.
// Ej: si recibe [{ name: 'Lions', resultados: [10, 20, 5] }, { name: 'Tigers', resultados: [3, 4] }, { name: 'Eagles', resultados: [50] }] y 15 devuelve [{ name: 'Lions', resultados: [10, 20, 5] }, { name: 'Eagles', resultados: [50] }]

function filtrarEquiposConAlgunaVictoriaGrande(teamsList, limit) {

  const result = teamsList.filter((team) => {

    return team.resultados.some((resultado) => {
        return resultado > limit
    })
  })
  return result
}

// Ejercicio 6
// Crea una funcion filtrarEquiposConTodosLosResultadosBuenos que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve los equipos en los que todos los resultados son mayores o iguales que el limite.
// Ej: si recibe [{ name: 'Lions', resultados: [10, 20] }, { name: 'Tigers', resultados: [10, 5] }, { name: 'Eagles', resultados: [30, 40] }] y 10 devuelve [{ name: 'Lions', resultados: [10, 20] }, { name: 'Eagles', resultados: [30, 40] }]

function filtrarEquiposConTodosLosResultadosBuenos (teamsList, limit) {
  
  const result = teamsList.filter ( (team) => {
    
  return team.resultados.every ( (resultado) => {
      return resultado >= limit
    })
  
  })
  return result
}

// Ejercicio 7
// Crea una funcion filtrarAlumnosAprobados que reciba un array de alumnos con key notas (array de numeros)
// y una nota minima. Devuelve los alumnos cuyas notas son todas mayores o iguales que la nota minima.
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [3, 8, 9] }, { name: 'Charlie', notas: [5, 5] }] y 5 devuelve [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Charlie', notas: [5, 5] }]

function filtrarAlumnosAprobados (studentList, gradeMinimum) {
  
  const result = studentList.filter ( (student) => {
    
  return student.notas.every ( (resultado) => {
      return resultado >= gradeMinimum
    })
  
  })
  return result
}

// Ejercicio 8
// Crea una funcion filtrarAlumnosConAlgunSuspenso que reciba un array de alumnos con key notas (array de numeros)
// y una nota minima. Devuelve los alumnos que tienen al menos una nota menor que la nota minima.
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [3, 8, 9] }, { name: 'Charlie', notas: [5, 5] }] y 5 devuelve [{ name: 'Bob', notas: [3, 8, 9] }]

function filtrarAlumnosConAlgunSuspenso (studentList, gradeMinimum) {
  
  const result = studentList.filter ( (student) => {
    
  return student.notas.some ( (resultado) => {
      return resultado < gradeMinimum
    })
  
  })
  return result
}

// Ejercicio 9
// Crea una funcion filtrarProductosConStockEnAlgunaTienda que reciba un array de productos con key tiendas
// (array de numeros) y un valor. Devuelve los productos que tienen ese valor en alguna de sus tiendas.
// Ej: si recibe [{ name: 'Shirt', tiendas: [0, 5, 10] }, { name: 'Pants', tiendas: [2, 3] }, { name: 'Shoes', tiendas: [0, 0] }] y 0 devuelve [{ name: 'Shirt', tiendas: [0, 5, 10] }, { name: 'Shoes', tiendas: [0, 0] }]

function filtrarProductosConStockEnAlgunaTienda (productsList, value) {
  
  const result = productsList.filter ( (product) => {
    
  return product.tiendas.some ( (resultado) => {
      return resultado === value
    })
  
  })
  return result
}

// Ejercicio 10
// Crea una funcion filtrarCarritosCaros que reciba un array de carritos con key productos
// (array de objetos con key precio) y un limite. Devuelve los carritos cuya suma de precios es mayor que el limite.
// Ej: si recibe [{ name: 'Cart1', productos: [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] }, { name: 'Cart2', productos: [{ name: 'Shoes', precio: 5 }] }] y 25 devuelve [{ name: 'Cart1', productos: [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] }]

function filtrarCarritosCaros(cartsList, limit) {

  const result = cartsList.filter((cart) => {

    const suma = cart.productos.reduce((acc, producto) => {
      return acc + producto.precio
    }, 0)

    return suma > limit
  })

  return result
}

// Ejercicio 11
// Crea una funcion filtrarCarritosBaratos que reciba un array de carritos con key productos
// (array de objetos con key precio) y un limite. Devuelve los carritos cuya suma de precios es menor que el limite.
// Ej: si recibe [{ name: 'Cart1', productos: [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] }, { name: 'Cart2', productos: [{ name: 'Shoes', precio: 5 }] }] y 25 devuelve [{ name: 'Cart2', productos: [{ name: 'Shoes', precio: 5 }] }]

function filtrarCarritosBaratos(cartsList, limit) {

  const result = cartsList.filter((cart) => {

    const suma = cart.productos.reduce((acc, producto) => {
      return acc + producto.precio
    }, 0)

    return suma < limit
  })

  return result
}

// Ejercicio 12
// Crea una funcion filtrarPedidosConProductoCaro que reciba un array de pedidos con key productos
// (array de objetos con key precio) y un limite. Devuelve los pedidos que tienen al menos un producto cuyo precio es mayor que el limite.
// Ej: si recibe [{ name: 'Order1', productos: [{ name: 'Mouse', precio: 10 }, { name: 'Laptop', precio: 50 }] }, { name: 'Order2', productos: [{ name: 'Pen', precio: 5 }, { name: 'Notebook', precio: 8 }] }] y 20 devuelve [{ name: 'Order1', productos: [{ name: 'Mouse', precio: 10 }, { name: 'Laptop', precio: 50 }] }]

function filtrarPedidosConProductoCaro (orderList, limit) {
  
  const result = orderList.filter ( (order) => {
    
  return order.productos.some((product) => {
    return product.precio > limit
    })
  
  })
  return result
}

// Ejercicio 13
// Crea una funcion filtrarEquiposConJugadoresActivos que reciba un array de equipos con key jugadores
// (array de objetos con key activo) y un limite. Devuelve los equipos cuyo numero de jugadores activos es mayor que el limite.
// Ej: si recibe [{ name: 'Falcons', jugadores: [{ name: 'Sam', activo: true }, { name: 'Max', activo: false }, { name: 'Jo', activo: true }] }, { name: 'Sharks', jugadores: [{ name: 'Lee', activo: false }] }] y 1 devuelve [{ name: 'Falcons', jugadores: [{ name: 'Sam', activo: true }, { name: 'Max', activo: false }, { name: 'Jo', activo: true }] }]

function filtrarEquiposConJugadoresActivos(teamsList, limit) {

  const result = teamsList.filter((team) => {

    const activePlayers = team.jugadores.filter((player) => {
      return player.activo === true
    })

    return activePlayers.length > limit
  })

  return result
}

// Ejercicio 14
// Crea una funcion filtrarDepartamentosConSalariosAltos que reciba un array de departamentos con key empleados
// (array de objetos con key salario) y un limite. Devuelve los departamentos cuya suma de salarios es mayor que el limite.
// Ej: si recibe [{ name: 'Engineering', empleados: [{ name: 'Alice', salario: 1000 }, { name: 'Bob', salario: 1500 }] }, { name: 'Sales', empleados: [{ name: 'Charlie', salario: 500 }] }] y 2000 devuelve [{ name: 'Engineering', empleados: [{ name: 'Alice', salario: 1000 }, { name: 'Bob', salario: 1500 }] }]

function filtrarDepartamentosConSalariosAltos(departmentsList, limit) {

  const result = departmentsList.filter((department) => {

    const totalSalary = department.empleados.reduce((acc, employee) => {
      return acc + employee.salario
    }, 0)

    return totalSalary > limit
  })

  return result
}

// Ejercicio 15
// Crea una funcion filtrarEmpresasConPocosEmpleados que reciba un array de empresas con key empleados
// (array de objetos) y un limite. Devuelve las empresas cuyo numero de empleados es menor que el limite.
// Ej: si recibe [{ name: 'Acme', empleados: [{ name: 'Alice' }, { name: 'Bob' }] }, { name: 'Globex', empleados: [{ name: 'Eve' }, { name: 'Ivan' }, { name: 'Mary' }] }] y 3 devuelve [{ name: 'Acme', empleados: [{ name: 'Alice' }, { name: 'Bob' }] }]

function filtrarEmpresasConPocosEmpleados(companiesList, limit) {

  const result = companiesList.filter((company) => {

    return company.empleados.length < limit

  })

  return result
}