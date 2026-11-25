// Ejercicio 1
// Crea una funcion buscarPrimerUsuarioConMuchosPuntos que reciba un array de usuarios con key puntos
// (array de numeros) y un limite. Devuelve el primer usuario cuya suma de puntos es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Alice', puntos: [1, 1] }, { name: 'Bob', puntos: [10, 20] }] y 5 devuelve { name: 'Bob', puntos: [10, 20] }

function buscarPrimerUsuarioConMuchosPuntos(usersList, limit) {

    const maxPoints = usersList.find((user) => {

        const totalPointsUser = user.puntos.reduce((acc, student) => {

            return acc + student
        }, 0)
        return totalPointsUser > limit

    })
    return maxPoints
}

// Ejercicio 2
// Crea una funcion buscarPrimerUsuarioConPocosPuntos que reciba un array de usuarios con key puntos
// (array de numeros) y un limite. Devuelve el primer usuario cuya suma de puntos es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Alice', puntos: [10, 20] }, { name: 'Bob', puntos: [1, 1] }] y 5 devuelve { name: 'Bob', puntos: [1, 1] }

function buscarPrimerUsuarioConPocosPuntos(usersList, limit) {

    const minimumPoints = usersList.find((user) => {

        const totalPointsUser = user.puntos.reduce((acc, student) => {

            return acc + student
        }, 0)
        return totalPointsUser < limit
    })
    return minimumPoints
}

// Ejercicio 3
// Crea una funcion buscarPrimerUsuarioConMuchasTareas que reciba un array de usuarios con key tareas
// (array) y un limite. Devuelve el primer usuario cuyo numero de tareas es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Alice', tareas: ['a'] }, { name: 'Bob', tareas: ['a', 'b', 'c'] }] y 2 devuelve { name: 'Bob', tareas: ['a', 'b', 'c'] }

function buscarPrimerUsuarioConMuchasTareas(usersList, limit) {

    const firstUserWithManyTasks = usersList.find((user) => {

        return user.tareas.length > limit
    })
    return firstUserWithManyTasks
}

// Ejercicio 4
// Crea una funcion buscarPrimerUsuarioConPocasTareas que reciba un array de usuarios con key tareas
// (array) y un limite. Devuelve el primer usuario cuyo numero de tareas es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Alice', tareas: ['a', 'b', 'c'] }, { name: 'Bob', tareas: ['a'] }] y 2 devuelve { name: 'Bob', tareas: ['a'] }

function buscarPrimerUsuarioConPocasTareas(usersList, limit) {

    const userWithFewTasks = usersList.find((user) => {

        return user.tareas.length < limit
    })
    return userWithFewTasks
}

// Ejercicio 5
// Crea una funcion buscarPrimerEquipoConVictoriaGrande que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve el primer equipo que tiene al menos un resultado mayor que el limite, usando find.
// Ej: si recibe [{ team: 'Tigers', resultados: [3, 4] }, { team: 'Lions', resultados: [10, 20, 5] }] y 15 devuelve { team: 'Lions', resultados: [10, 20, 5] }

function buscarPrimerEquipoConVictoriaGrande(teamsList, limit) {

    const greatestResult = teamsList.find((team) => {

        const totalResults = team.resultados.some((point) => {

            return point > limit
        })
        return totalResults
    })
    return greatestResult
}

// Ejercicio 6
// Crea una funcion buscarPrimerEquipoConTodosLosResultadosBuenos que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve el primer equipo en el que todos los resultados son mayores o iguales que el limite, usando find.
// Ej: si recibe [{ team: 'Tigers', resultados: [10, 5] }, { team: 'Lions', resultados: [10, 20] }] y 10 devuelve { team: 'Lions', resultados: [10, 20] }

function buscarPrimerEquipoConTodosLosResultadosBuenos(teamsList, limit) {

    const equalOrGreatestResults = teamsList.find((team) => {

        const allResultsGood = team.resultados.every((point) => {

            return point >= limit
        })
        return allResultsGood
    })
    return equalOrGreatestResults
}

// Ejercicio 7
// Crea una funcion buscarPrimerAlumnoAprobado que reciba un array de alumnos con key notas
// (array de numeros) y una nota minima. Devuelve el primer alumno cuyas notas son todas mayores o iguales que la nota minima, usando find.
// Ej: si recibe [{ name: 'Bob', notas: [3, 8, 9] }, { name: 'Alice', notas: [5, 6, 7] }] y 5 devuelve { name: 'Alice', notas: [5, 6, 7] }

function buscarPrimerAlumnoAprobado(studentsList, limit) {

    const bestGrades = studentsList.find((student) => {

        const totalGrades = student.notas.every((note) => {

            return note >= limit
        })
        return totalGrades
    })

    return bestGrades
}

// Ejercicio 8
// Crea una funcion buscarPrimerAlumnoConAlgunSuspenso que reciba un array de alumnos con key notas
// (array de numeros) y una nota minima. Devuelve el primer alumno que tiene al menos una nota menor que la nota minima, usando find.
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [3, 8, 9] }] y 5 devuelve { name: 'Bob', notas: [3, 8, 9] }

function buscarPrimerAlumnoConAlgunSuspenso(studentsList, note) {

    const failedStudent = studentsList.find((student) => {
        const hasFailedGrade = student.notas.some((grade) => {
            return grade < note
        })
        return hasFailedGrade
    })
    return failedStudent
}

// Ejercicio 9
// Crea una funcion buscarPrimerProductoConStockEnAlgunaTienda que reciba un array de productos con key tiendas
// (array de numeros) y un valor. Devuelve el primer producto que tiene ese valor en alguna de sus tiendas, usando find.
// Ej: si recibe [{ name: 'Pants', tiendas: [2, 3] }, { name: 'Shirt', tiendas: [0, 5, 10] }] y 0 devuelve { name: 'Shirt', tiendas: [0, 5, 10] }

function buscarPrimerProductoConStockEnAlgunaTienda(productsList, value) {

    const sameNumber = productsList.find((product) => {

        const sameStores = product.tiendas.some((store) => {

            return store === value
        })
        return sameStores
    })
    return sameNumber
}

// Ejercicio 10
// Crea una funcion buscarPrimerCarritoCaro que reciba un array de carritos con key productos
// (array de objetos con key precio) y un limite. Devuelve el primer carrito cuya suma de precios es mayor que el limite, usando find.
// Ej: si recibe [{ name: 'Cart2', productos: [{ precio: 5 }] }, { name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }] y 25 devuelve { name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }

function buscarPrimerCarritoCaro(cartsList, limit) {

    const moreExpensiveCart = cartsList.find((cart) => {

        const totalPrice = cart.productos.reduce((acc, product) => {

            return acc + product.precio
        }, 0)
        return totalPrice > limit
    })
    return moreExpensiveCart
}

// Ejercicio 11
// Crea una funcion buscarPrimerCarritoBarato que reciba un array de carritos con key productos
// (array de objetos con key precio) y un limite. Devuelve el primer carrito cuya suma de precios es menor que el limite, usando find.
// Ej: si recibe [{ name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }, { name: 'Cart2', productos: [{ precio: 5 }] }] y 25 devuelve { name: 'Cart2', productos: [{ precio: 5 }] }

function buscarPrimerCarritoBarato(cartsList, limit) {

    const CheapestCart = cartsList.find((cart) => {

        const totalPrice = cart.productos.reduce((acc, product) => {

            return acc + product.precio
        }, 0)
        return totalPrice < limit
    })
    return CheapestCart
}

// Ejercicio 12
// Crea una funcion buscarPrimerPedidoConProductoCaro que reciba un array de pedidos con key productos
// (array de objetos con key precio) y un limite. Devuelve el primer pedido que tiene al menos un producto mas caro que el limite, usando find.
// Ej: si recibe [{ name: 'Order2', productos: [{ precio: 5 }, { precio: 8 }] }, { name: 'Order1', productos: [{ precio: 10 }, { precio: 50 }] }] y 20 devuelve { name: 'Order1', productos: [{ precio: 10 }, { precio: 50 }] }

function buscarPrimerPedidoConProductoCaro(ordersList, limit) {

    const mostExpensiveOrder = ordersList.find((order) => {

        const productExpensive = order.productos.some((product) => {

            return product.precio > limit
        })
        return productExpensive
    })
    return mostExpensiveOrder
}

// Ejercicio 13
// Crea una funcion buscarPrimerEquipoConJugadoresActivos que reciba un array de equipos con key jugadores
// (array de objetos con key activo) y un limite. Devuelve el primer equipo cuyo numero de jugadores activos es mayor que el limite, usando find.
// Ej: si recibe [{ team: 'Sharks', jugadores: [{ activo: false }] }, { team: 'Falcons', jugadores: [{ activo: true }, { activo: false }, { activo: true }] }] y 1 devuelve { team: 'Falcons', jugadores: [{ activo: true }, { activo: false }, { activo: true }] }

function buscarPrimerEquipoConJugadoresActivos(teamsList, limit) {

    const someActives = teamsList.find((team) => {

        const everyPlayer = team.jugadores.reduce((acc, player) => {

            return player.activo === true ? acc + 1 : acc
        }, 0)
        return everyPlayer > limit
    })
    return someActives
}


// Ejercicio 14
// Crea una funcion buscarPrimerDepartamentoConSalariosAltos que reciba un array de departamentos con key empleados
// (array de objetos con key salario) y un limite. Devuelve el primer departamento cuya suma de salarios es mayor que el limite, usando find.
// Ej: si recibe [{ department: 'Sales', empleados: [{ salario: 500 }] }, { department: 'Engineering', empleados: [{ salario: 1000 }, { salario: 1500 }] }] y 2000 devuelve { department: 'Engineering', empleados: [{ salario: 1000 }, { salario: 1500 }] }

function buscarPrimerDepartamentoConSalariosAltos(departmentsList, limit) {

    const firstDepartmentExpensive = departmentsList.find((department) => {

        const totalSalaries = department.empleados.reduce((acc, employee) => {

            return acc + employee.salario
        }, 0)
        return totalSalaries > limit
    })
    return firstDepartmentExpensive
}

// Ejercicio 15
// Crea una funcion buscarPrimerDepartamentoConPocosEmpleados que reciba un array de departamentos con key empleados
// (array de objetos) y un limite. Devuelve el primer departamento cuyo numero de empleados es menor que el limite, usando find.
// Ej: si recibe [{ department: 'Globex', empleados: [{ name: 'Eve' }, { name: 'Ivan' }, { name: 'Mary' }] }, { department: 'Acme', empleados: [{ name: 'Alice' }, { name: 'Bob' }] }] y 3 devuelve { department: 'Acme', empleados: [{ name: 'Alice' }, { name: 'Bob' }] }

function buscarPrimerDepartamentoConPocosEmpleados(departmentsList, limit) {

    const fewEmployees = departmentsList.find((department) => {

        return department.empleados.length < limit
    })
    return fewEmployees
}