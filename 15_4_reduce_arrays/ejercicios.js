// Ejercicio 1
// Crea una funcion sumarTodosLosPuntos que reciba un array de usuarios con key puntos (array de numeros)
// y devuelva la suma de los puntos de todos los usuarios, usando reduce.
// Ej: si recibe [{ name: 'Alice', puntos: [10, 20] }, { name: 'Bob', puntos: [5, 5] }] devuelve 40

function sumarTodosLosPuntos(numbersList) {

    const numbersEvery = numbersList.reduce((acc, number) => {
        const usuarios = number.puntos.reduce((acc, punto) => {
            return acc + punto
        }, 0)
        return acc + usuarios
    }, 0)
    return numbersEvery
}

// Ejercicio 2
// Crea una funcion contarTareasTotales que reciba un array de usuarios con key tareas (array)
// y devuelva el numero total de tareas entre todos los usuarios, usando reduce.
// Ej: si recibe [{ name: 'Alice', tareas: ['a', 'b', 'c'] }, { name: 'Bob', tareas: ['a'] }] devuelve 4

function contarTareasTotales(homeworksList) {

    const homeworksEvery = homeworksList.reduce((acc, user) => {
        const usersHomeworks = user.tareas.reduce((acc, homework) => {
            return acc + 1
        }, 0)
        return acc + usersHomeworks
    }, 0)
    return homeworksEvery
}

// Ejercicio 3
// Crea una funcion obtenerUsuarioConMasPuntos que reciba un array de usuarios con key puntos (array de numeros)
// y devuelva el usuario completo cuya suma de puntos es la mas alta, usando reduce.
// Ej: si recibe [{ name: 'Alice', puntos: [10, 20] }, { name: 'Bob', puntos: [50] }] devuelve { name: 'Bob', puntos: [50] }

function obtenerUsuarioConMasPuntos(usersList) {

    const numbersList = usersList.reduce((acc, user) => {

        const totalPoints = user.puntos.reduce((base, point) => {
            return base + point
        }, 0)

        const morePoints = acc.puntos.reduce((total, element) => {
            return total + element
        }, 0)

        return totalPoints < morePoints ? acc : user
    })

    return numbersList
}

// Ejercicio 4
// Crea una funcion obtenerEquipoConMejorMedia que reciba un array de equipos con key resultados (array de numeros)
// y devuelva el equipo completo cuya media de resultados es la mas alta, usando reduce.
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20] }, { team: 'Tigers', resultados: [5, 5] }] devuelve { team: 'Lions', resultados: [10, 20] }
// Ejercicio 4
// Crea una funcion obtenerEquipoConMejorMedia que reciba un array de equipos con key resultados (array de numeros)
// y devuelva el equipo completo cuya media de resultados es la mas alta, usando reduce.
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20] }, { team: 'Tigers', resultados: [5, 5] }] devuelve { team: 'Lions', resultados: [10, 20] }

function obtenerEquipoConMejorMedia(teamsList) {

    const bestTeam = teamsList.reduce((acc, team) => {

        const sumResultsTeam1 = acc.resultados.reduce((base, number) => {
            return base + number
        }, 0)

        const mediaTeam1 = sumResultsTeam1 / acc.resultados.length


        const totalSum = team.resultados.reduce((base, point) => {
            return base + point
        }, 0)

        const mediaSum = totalSum / team.resultados.length

        const mediaBest = mediaTeam1 < mediaSum ? team : acc

        return mediaBest
    })

    return bestTeam

}

// Ejercicio 5
// Crea una funcion sumarTodosLosResultados que reciba un array de equipos con key resultados (array de numeros)
// y devuelva la suma de los resultados de todos los equipos, usando reduce.
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20] }, { team: 'Tigers', resultados: [5, 15] }] devuelve 50

function sumarTodosLosResultados(teamsList) {

    const sumTotal = teamsList.reduce((acc, team) => {

        const sumResultsTeam = team.resultados.reduce((base, point) => {

            return base + point
        }, 0)

        return acc + sumResultsTeam

    }, 0)

    return sumTotal
}

// Ejercicio 6
// Crea una funcion contarEquiposConVictoriaGrande que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve cuantos equipos tienen al menos un resultado mayor que el limite, usando reduce.
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20, 5] }, { team: 'Tigers', resultados: [3, 4] }] y 15 devuelve 1

function contarEquiposConVictoriaGrande(teamsList, limit) {

    const greaterThanLimit = teamsList.reduce((acc, team) => {

        const resultsAboveLimit = team.resultados.reduce((base, point) => {
            return point > limit ? base + 1 : base
        }, 0)

        return resultsAboveLimit > 0 ? acc + 1 : acc
    }, 0)

    return greaterThanLimit
}

// Ejercicio 7
// Crea una funcion obtenerMediaGeneralDeNotas que reciba un array de alumnos con key notas (array de numeros)
// y devuelva la media de todas las notas de todos los alumnos juntas, usando reduce.
// Ej: si recibe [{ name: 'Alice', notas: [5, 7] }, { name: 'Bob', notas: [6, 10] }] devuelve 7

function obtenerMediaGeneralDeNotas(studentsList) {

    const mediaGrades = studentsList.reduce((acc, student) => {

        const totalGrades = student.notas.reduce((base, point) => {
            return base + point
        }, 0)

        return acc + totalGrades

    }, 0)

    const totalNotes = studentsList.reduce((acc, student) => {
        return acc + student.notas.length
    }, 0)

    return Number((mediaGrades / totalNotes).toFixed(2))
}

// Ejercicio 8
// Crea una funcion contarAlumnosAprobados que reciba un array de alumnos con key notas (array de numeros)
// y una nota minima. Devuelve cuantos alumnos tienen todas sus notas mayores o iguales que la nota minima, usando reduce.
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [3, 8, 9] }] y 5 devuelve 1

function contarAlumnosAprobados(studentsList, minimumGrade) {

    const finalNotes = studentsList.reduce((acc, student) => {

        const approvedGrades = student.notas.reduce((base, point) => {

            return point >= minimumGrade ? base + 1 : base
        }, 0)

        return approvedGrades === student.notas.length ? acc + 1 : acc
    }, 0)

    return finalNotes
}

// Ejercicio 9
// Crea una funcion contarProductosConStockEnTienda que reciba un array de productos con key tiendas
// (array de numeros) y un valor. Devuelve cuantos productos tienen ese valor en alguna de sus tiendas, usando reduce.
// Ej: si recibe [{ name: 'Shirt', tiendas: [0, 5] }, { name: 'Pants', tiendas: [2, 3] }] y 0 devuelve 1

function contarProductosConStockEnTienda(productsList, stock) {

    const nonStore = productsList.reduce((acc, product) => {

        const quantities = product.tiendas.reduce((storeCount, storeValue) => {

            return storeValue === stock ? storeCount + 1 : storeCount
        }, 0)

        return quantities > 0 ? acc + 1 : acc
    }, 0)

    return nonStore
}

// Ejercicio 10
// Crea una funcion sumarTotalDeCarritos que reciba un array de carritos con key productos
// (array de objetos con key precio). Devuelve la suma de los precios de todos los productos de todos los carritos, usando reduce.
// Ej: si recibe [{ name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }, { name: 'Cart2', productos: [{ precio: 5 }] }] devuelve 35

function sumarTotalDeCarritos(cartsList) {

    const totalPrices = cartsList.reduce((acc, cart) => {


        const productsPrices = cart.productos.reduce((base, product) => {

            return base + product.precio
        }, 0)

        return productsPrices + acc
    }, 0)

    return totalPrices
}

// Ejercicio 11
// Crea una funcion obtenerCarritoMasCaro que reciba un array de carritos con key productos
// (array de objetos con key precio) y devuelva el carrito completo cuya suma de precios es la mas alta, usando reduce.
// Ej: si recibe [{ name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }, { name: 'Cart2', productos: [{ precio: 5 }] }] devuelve { name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }

// Ejercicio 11
// Crea una funcion obtenerCarritoMasCaro que reciba un array de carritos con key productos
// (array de objetos con key precio) y devuelva el carrito completo cuya suma de precios es la mas alta, usando reduce.
// Ej: si recibe [{ name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }, { name: 'Cart2', productos: [{ precio: 5 }] }] devuelve { name: 'Cart1', productos: [{ precio: 10 }, { precio: 20 }] }

function obtenerCarritoMasCaro(cartsList) {

    const mostExpensiveCart = cartsList.reduce((acc, cart) => {

        const everyCart = cart.productos.reduce((base, product) => {
            return base + product.precio
        }, 0)

        const bestCartTotal = acc.productos.reduce((sum, product) => {
            return sum + product.precio
        }, 0)

        return everyCart > bestCartTotal ? cart : acc
    })
    return mostExpensiveCart
}

// Ejercicio 12
// Crea una funcion contarPedidosConProductoCaro que reciba un array de pedidos con key productos
// (array de objetos con key precio) y un limite. Devuelve cuantos pedidos tienen al menos un producto mas caro que el limite, usando reduce.
// Ej: si recibe [{ name: 'Order1', productos: [{ precio: 10 }, { precio: 50 }] }, { name: 'Order2', productos: [{ precio: 5 }, { precio: 8 }] }] y 20 devuelve 1

function contarPedidosConProductoCaro(orderList, limit) {

    const veryExpensiveOrder = orderList.reduce((acc, order) => {

        const everyOrder = order.productos.reduce((base, product) => {

            return product.precio > limit ? base + 1 : base
        }, 0)

        return everyOrder > 0 ? acc + 1 : acc
    }, 0)

    return veryExpensiveOrder
}

// Ejercicio 13
// Crea una funcion contarJugadoresActivosTotales que reciba un array de equipos con key jugadores
// (array de objetos con key activo). Devuelve cuantos jugadores activos hay en total entre todos los equipos, usando reduce.
// Ej: si recibe [{ team: 'Falcons', jugadores: [{ activo: true }, { activo: false }] }, { team: 'Sharks', jugadores: [{ activo: true }] }] devuelve 2

function contarJugadoresActivosTotales(teamsList) {

    const activePlayers = teamsList.reduce((acc, team) => {

        const everyPlayer = team.jugadores.reduce((activeCount, player) => {

            return player.activo === true ? activeCount + 1 : activeCount
        }, 0)

        return acc + everyPlayer

    }, 0)
    return activePlayers
}

// Ejercicio 14
// Crea una funcion sumarTotalDeSalarios que reciba un array de departamentos con key empleados
// (array de objetos con key salario). Devuelve la suma de los salarios de todos los empleados de todos los departamentos, usando reduce.
// Ej: si recibe [{ department: 'Engineering', empleados: [{ salario: 1000 }, { salario: 1500 }] }, { department: 'Sales', empleados: [{ salario: 500 }] }] devuelve 3000

function sumarTotalDeSalarios(departmentsList) {

    const totalSalaries = departmentsList.reduce((acc, department) => {

        const employees = department.empleados.reduce((salaryTotal, employee) => {

            return salaryTotal + employee.salario
        }, 0)

        return acc + employees

    }, 0)
    return totalSalaries
}

// Ejercicio 15
// Crea una funcion agruparEquiposPorResultado que reciba un array de equipos con key resultados (array de numeros)
// y un limite. Devuelve un objeto con dos keys: ganadores (los equipos cuya media de resultados es mayor o igual que el limite)
// y perdedores (el resto), usando reduce.
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20] }, { team: 'Tigers', resultados: [1, 2] }] y 10 devuelve { ganadores: [{ team: 'Lions', resultados: [10, 20] }], perdedores: [{ team: 'Tigers', resultados: [1, 2] }] }

function agruparEquiposPorResultado(clasificationLeague, average) {

    const newClasification = clasificationLeague.reduce((acc, team) => {

        const resultsTeams = team.resultados.reduce((base, result) => {

            return base + result
        }, 0)

        const averageTeams = resultsTeams / team.resultados.length

        if (averageTeams >= average) {
            acc.ganadores.push(team)
        } else {
            acc.perdedores.push(team)
        }

        return acc

    }, { ganadores: [], perdedores: [] })

    return newClasification
}