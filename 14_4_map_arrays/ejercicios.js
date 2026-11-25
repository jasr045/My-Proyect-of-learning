// Ejercicio 1
// Crea una funcion anadirSumaDePuntos que reciba un array de usuarios con key puntos (array de numeros)
// y devuelva un array de usuarios con una nueva key totalPuntos (la suma de sus puntos)
// Ej: si recibe [{ name: 'Alice', puntos: [10, 20] }, { name: 'Bob', puntos: [5, 5] }] devuelve [{ name: 'Alice', puntos: [10, 20], totalPuntos: 30 }, { name: 'Bob', puntos: [5, 5], totalPuntos: 10 }]

function anadirSumaDePuntos(usersList) {

    const finalScore = usersList.map((user) => {
        return {
            name: user.name,
            puntos: user.puntos,
            totalPuntos: user.puntos.reduce((acc, value) => {
                return acc + value
            }, 0)
        }
    })
    return finalScore
}

// Ejercicio 2
// Crea una funcion anadirNumeroDeTareas que reciba un array de usuarios con key tareas (array)
// y devuelva un array de usuarios con una nueva key numeroDeTareas (cuantas tareas tiene)
// Ej: si recibe [{ name: 'Alice', tareas: ['a', 'b', 'c'] }, { name: 'Bob', tareas: ['a'] }] devuelve [{ name: 'Alice', tareas: ['a', 'b', 'c'], numeroDeTareas: 3 }, { name: 'Bob', tareas: ['a'], numeroDeTareas: 1 }]

function anadirNumeroDeTareas(usersList) {

    const numberOfJobs = usersList.map((user) => {
        return {
            name: user.name,
            tareas: user.tareas,
            numeroDeTareas: user.tareas.length
        }
    })
    return numberOfJobs
}

// Ejercicio 3
// Crea una funcion anadirMediaDeResultados que reciba un array de equipos con key resultados (array de numeros)
// y devuelva un array de equipos con una nueva key media (la media de sus resultados)
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20] }, { team: 'Tigers', resultados: [5, 15] }] devuelve [{ team: 'Lions', resultados: [10, 20], media: 15 }, { team: 'Tigers', resultados: [5, 15], media: 10 }]

function anadirMediaDeResultados(leagueTable) {

    const newClassification = leagueTable.map((ranked) => {
        return {
            team: ranked.team,
            resultados: ranked.resultados,
            media: ranked.resultados.reduce((acc, points) => {
                return acc + points
            }, 0) / ranked.resultados.length
        }
    })
    return newClassification
}


// Ejercicio 4
// Crea una funcion anadirMejorResultado que reciba un array de equipos con key resultados (array de numeros)
// y devuelva un array de equipos con una nueva key mejorResultado (el resultado mas alto)
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20, 5] }, { team: 'Tigers', resultados: [3, 8] }] devuelve [{ team: 'Lions', resultados: [10, 20, 5], mejorResultado: 20 }, { team: 'Tigers', resultados: [3, 8], mejorResultado: 8 }]

function anadirMejorResultado(leagueTable) {

    const newClassification = leagueTable.map((ranked) => {
        return {
            team: ranked.team,
            resultados: ranked.resultados,
            mejorResultado: ranked.resultados.reduce((acc, points) => {
                return points > acc ? points : acc
            }, 0)
        }
    })
    return newClassification
}

// Ejercicio 5
// Crea una funcion anadirPeorResultado que reciba un array de equipos con key resultados (array de numeros)
// y devuelva un array de equipos con una nueva key peorResultado (el resultado mas bajo)
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20, 5] }, { team: 'Tigers', resultados: [3, 8] }] devuelve [{ team: 'Lions', resultados: [10, 20, 5], peorResultado: 5 }, { team: 'Tigers', resultados: [3, 8], peorResultado: 3 }]

function anadirPeorResultado(leagueTable) {

    const newClassification = leagueTable.map((ranked) => {
        return {
            team: ranked.team,
            resultados: ranked.resultados,
            peorResultado: ranked.resultados.reduce((acc, points) => {
                return points < acc ? points : acc
            })
        }
    })
    return newClassification
}

// Ejercicio 6
// Crea una funcion anadirSiTieneVictoriaGrande que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve un array de equipos con una nueva key tieneVictoriaGrande
// (true si algun resultado es mayor que el limite)
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20, 5] }, { team: 'Tigers', resultados: [3, 4] }] y 15 devuelve [{ team: 'Lions', resultados: [10, 20, 5], tieneVictoriaGrande: true }, { team: 'Tigers', resultados: [3, 4], tieneVictoriaGrande: false }]

function anadirSiTieneVictoriaGrande(leagueTable, limit) {

    const newClassification = leagueTable.map((ranked) => {
        return {
            team: ranked.team,
            resultados: ranked.resultados,
            tieneVictoriaGrande: ranked.resultados.some((result) => {
                return result > limit
            })
        }
    })
    return newClassification
}

// Ejercicio 7
// Crea una funcion anadirSiTodosLosResultadosSonBuenos que reciba un array de equipos con key resultados
// (array de numeros) y un limite. Devuelve un array de equipos con una nueva key todosBuenos
// (true si todos los resultados son mayores o iguales que el limite)
// Ej: si recibe [{ team: 'Lions', resultados: [10, 20] }, { team: 'Tigers', resultados: [10, 5] }] y 10 devuelve [{ team: 'Lions', resultados: [10, 20], todosBuenos: true }, { team: 'Tigers', resultados: [10, 5], todosBuenos: false }]

function anadirSiTodosLosResultadosSonBuenos(teams, limit) {

    const newClassification = teams.map((user) => {

        const result = user.resultados.every((point) => {
            return point >= limit
        })

        return {
            team: user.team,
            resultados: user.resultados,
            todosBuenos: result
        }
    })

    return newClassification

}

// Ejercicio 8
// Crea una funcion anadirMediaDeNotas que reciba un array de alumnos con key notas (array de numeros)
// y devuelva un array de alumnos con una nueva key media (la media de sus notas)
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [10, 10] }] devuelve [{ name: 'Alice', notas: [5, 6, 7], media: 6 }, { name: 'Bob', notas: [10, 10], media: 10 }]

function anadirMediaDeNotas(students) {

    const newPoints = students.map((student) => {

        const mediaPoints = student.notas.reduce((acc, number) => {

            return acc + number
        }, 0) / student.notas.length

        return {
            name: student.name,
            notas: student.notas,
            media: mediaPoints
        }
    })

    return newPoints
}

// Ejercicio 9
// Crea una funcion anadirSiAprueba que reciba un array de alumnos con key notas (array de numeros)
// y una nota minima. Devuelve un array de alumnos con una nueva key aprueba
// (true si todas sus notas son mayores o iguales que la nota minima)
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [3, 8, 9] }] y 5 devuelve [{ name: 'Alice', notas: [5, 6, 7], aprueba: true }, { name: 'Bob', notas: [3, 8, 9], aprueba: false }]

function anadirSiAprueba(studentsList, minimum) {

    const studentsPassed = studentsList.map((student) => {

        const mediaPoints = student.notas.every((note) => {
            return note >= minimum
        })

        return {
            name: student.name,
            notas: student.notas,
            aprueba: mediaPoints
        }
    })

    return studentsPassed
}

// Ejercicio 10
// Crea una funcion anadirSiTieneAlgunSuspenso que reciba un array de alumnos con key notas (array de numeros)
// y una nota minima. Devuelve un array de alumnos con una nueva key tieneSuspenso
// (true si alguna de sus notas es menor que la nota minima)
// Ej: si recibe [{ name: 'Alice', notas: [5, 6, 7] }, { name: 'Bob', notas: [3, 8, 9] }] y 5 devuelve [{ name: 'Alice', notas: [5, 6, 7], tieneSuspenso: false }, { name: 'Bob', notas: [3, 8, 9], tieneSuspenso: true }]

function anadirSiTieneAlgunSuspenso(studentsList, minimum) {

    const studentsFailed = studentsList.map((student) => {

        const mediaPoints = student.notas.some((note) => {
            return note < minimum
        })

        return {
            name: student.name,
            notas: student.notas,
            tieneSuspenso: mediaPoints
        }
    })

    return studentsFailed
}

// Ejercicio 11
// Crea una funcion anadirSiHayStockEnTienda que reciba un array de productos con key tiendas
// (array de numeros) y un valor. Devuelve un array de productos con una nueva key hayStock
// (true si ese valor esta en alguna de sus tiendas)
// Ej: si recibe [{ name: 'Shirt', tiendas: [0, 5, 10] }, { name: 'Pants', tiendas: [2, 3] }] y 0 devuelve [{ name: 'Shirt', tiendas: [0, 5, 10], hayStock: true }, { name: 'Pants', tiendas: [2, 3], hayStock: false }]

function anadirSiHayStockEnTienda(productsList, value) {

    const productQuantity = productsList.map((product) => {

        return {
            name: product.name,
            tiendas: product.tiendas,
            hayStock: product.tiendas.includes(value)
        }
    })

    return productQuantity
}

// Ejercicio 12
// Crea una funcion anadirTotalDelCarrito que reciba un array de carritos con key productos
// (array de objetos con key precio). Devuelve un array de carritos con una nueva key total
// (la suma de los precios de sus productos)
// Ej: si recibe [{ name: 'Cart1', productos: [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }] }, { name: 'Cart2', productos: [{ name: 'Shoes', precio: 5 }] }] devuelve [{ name: 'Cart1', productos: [{ name: 'Shirt', precio: 10 }, { name: 'Pants', precio: 20 }], total: 30 }, { name: 'Cart2', productos: [{ name: 'Shoes', precio: 5 }], total: 5 }]

function anadirTotalDelCarrito(cartShopping) {

    const newCart = cartShopping.map((cart) => {

        const sumProducts = cart.productos.reduce((acc, product) => {
            return acc + product.precio
        }, 0)

        return {
            name: cart.name,
            productos: cart.productos,
            total: sumProducts
        }
    })

    return newCart
}


// Ejercicio 13
// Crea una funcion anadirSiHayProductoCaro que reciba un array de pedidos con key productos
// (array de objetos con key precio) y un limite. Devuelve un array de pedidos con una nueva key hayProductoCaro
// (true si algun producto tiene un precio mayor que el limite)
// Ej: si recibe [{ name: 'Order1', productos: [{ name: 'Mouse', precio: 10 }, { name: 'Laptop', precio: 50 }] }, { name: 'Order2', productos: [{ name: 'Pen', precio: 5 }, { name: 'Notebook', precio: 8 }] }] y 20 devuelve [{ name: 'Order1', productos: [{ name: 'Mouse', precio: 10 }, { name: 'Laptop', precio: 50 }], hayProductoCaro: true }, { name: 'Order2', productos: [{ name: 'Pen', precio: 5 }, { name: 'Notebook', precio: 8 }], hayProductoCaro: false }]

function anadirSiHayProductoCaro(orderList, limit) {

    const orderQuantities = orderList.map((order) => {

        const priceHigher = order.productos.some((value) => {

            return value.precio > limit
        })
        return {
            name: order.name,
            productos: order.productos,
            hayProductoCaro: priceHigher
        }
    })
    return orderQuantities
}

// Ejercicio 14
// Crea una funcion anadirNumeroDeJugadoresActivos que reciba un array de equipos con key jugadores
// (array de objetos con key activo). Devuelve un array de equipos con una nueva key numeroDeActivos
// (cuantos de sus jugadores tienen activo en true)
// Ej: si recibe [{ team: 'Falcons', jugadores: [{ name: 'Sam', activo: true }, { name: 'Max', activo: false }, { name: 'Jo', activo: true }] }, { team: 'Sharks', jugadores: [{ name: 'Lee', activo: false }] }] devuelve [{ team: 'Falcons', jugadores: [{ name: 'Sam', activo: true }, { name: 'Max', activo: false }, { name: 'Jo', activo: true }], numeroDeActivos: 2 }, { team: 'Sharks', jugadores: [{ name: 'Lee', activo: false }], numeroDeActivos: 0 }]

function anadirNumeroDeJugadoresActivos(teamsList) {

    const newTeams = teamsList.map((team) => {

        const numeroActivos = team.jugadores.reduce((acc, player) => {
            return player.activo === true ? acc + 1 : acc
        }, 0)

        return {
            team: team.team,
            jugadores: team.jugadores,
            numeroDeActivos: numeroActivos
        }
    })

    return newTeams
}

// Ejercicio 15
// Crea una funcion anadirTotalDeSalarios que reciba un array de departamentos con key empleados
// (array de objetos con key salario). Devuelve un array de departamentos con una nueva key totalSalarios
// (la suma de los salarios de sus empleados)
// Ej: si recibe [{ department: 'Engineering', empleados: [{ name: 'Alice', salario: 1000 }, { name: 'Bob', salario: 1500 }] }, { department: 'Sales', empleados: [{ name: 'Charlie', salario: 500 }] }] devuelve [{ department: 'Engineering', empleados: [{ name: 'Alice', salario: 1000 }, { name: 'Bob', salario: 1500 }], totalSalarios: 2500 }, { department: 'Sales', empleados: [{ name: 'Charlie', salario: 500 }], totalSalarios: 500 }]

function anadirTotalDeSalarios(employeList) {

    const newSalaries = employeList.map((employe) => {

        const totalSalarios = employe.empleados.reduce((acc, employee) => {
            return acc + employee.salario
        }, 0)

        return {
            department: employe.department,
            empleados: employe.empleados,
            totalSalarios: totalSalarios
        }
    })

    return newSalaries
}