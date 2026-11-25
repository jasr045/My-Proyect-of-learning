// Exercise 1
// Create a function sumOfAllUserPointTotals that receives an array of users with a points key
// (array of numbers). Returns the sum of every user's point total added together, using map and reduce.
// E.g: with the `users` array from data.js, returns 71

function sumOfAllUserPointTotals(usersList) {

    const everyUser = usersList.map((user) => {

        const pointsEveryUser = user.points.reduce((acc, point) => {

            return acc + point
        }, 0)
        return pointsEveryUser
    })

    const totalSumOfUserPoints = everyUser.reduce((acc, points) => {

        return acc + points
    }, 0)

    return totalSumOfUserPoints
}

// Exercise 2
// Create a function highestUserPointTotal that receives an array of users with a points key
// (array of numbers). Returns the highest point total among all the users, using map and reduce.
// E.g: with the `users` array from data.js, returns 50

function highestUserPointTotal(userList) {

    const userPointTotals = userList.map((user) => {

        const userPointTotal = user.points.reduce((acc, point) => {
            return acc + point
        }, 0)
        return userPointTotal
    })

    const highestTotal = userPointTotals.reduce((acc, user) => {
        return user > acc ? user : acc
    }, 0)
    return highestTotal
}

// Exercise 3
// Create a function sumOfAllTeamAverages that receives an array of teams with a scores key
// (array of numbers). Returns the sum of every team's average score added together, using map and reduce.
// E.g: with the `teams` array from data.js, returns 29

function sumOfAllTeamAverages(teamList) {

    const teamAverages = teamList.map((team) => {

        const totalTeamScore = team.scores.reduce((acc, score) => {
            return acc + score
        }, 0)
        return totalTeamScore / team.scores.length
    })

    const sumOfAverages = teamAverages.reduce((acc, average) => {

        return acc + average
    }, 0)
    return sumOfAverages
}

// Exercise 4
// Create a function lowestTeamAverage that receives an array of teams with a scores key
// (array of numbers). Returns the lowest average score among all the teams, using map and reduce.
// E.g: with the `teams` array from data.js, returns 5

function lowestTeamAverage(teamList) {

    const teamAverages = teamList.map((team) => {

        const totalTeamScore = team.scores.reduce((acc, score) => {
            return acc + score
        }, 0)

        return totalTeamScore / team.scores.length
    })

    const lowestAverage = teamAverages.reduce((acc, average) => {

        return average < acc ? average : acc
    }, teamAverages[0])

    return lowestAverage
}

// Exercise 5
// Create a function totalGradePointsAcrossClass that receives an array of students with a grades key
// (array of numbers). Returns the sum of every student's grade total added together, using map and reduce.
// E.g: with the `students` array from data.js, returns 47

function totalGradePointsAcrossClass(studentList) {

    const studentGradeTotals = studentList.map((student) => {

        const everyStudentGrade = student.grades.reduce((acc, grade) => {
            return acc + grade
        }, 0)
        return everyStudentGrade
    })

    const totalClassGradePoints = studentGradeTotals.reduce((acc, student) => {
        return acc + student
    }, 0)
    return totalClassGradePoints
}

// Exercise 6
// Create a function nameOfStudentWithHighestGradeSum that receives an array of students with a grades key
// (array of numbers). Returns the name of the student whose grades add up to the highest total, using map and reduce.
// E.g: with the `students` array from data.js, returns 'Mia'

function nameOfStudentWithHighestGradeSum(studentList) {

    const highestStudentGrades = studentList.map((student) => {

        const everyStudentGrade = student.grades.reduce((acc, grade) => {

            return acc + grade
        }, 0)
        return {
            name: student.name,
            totalGrade: everyStudentGrade
        }
    })

    const studentWithHighestGrade = highestStudentGrades.reduce((acc, student) => {
        return student.totalGrade > acc.totalGrade ? student : acc
    }, highestStudentGrades[0])

    return studentWithHighestGrade.name
}

// Exercise 7
// Create a function sumOfAllCartTotals that receives an array of carts with an items key
// (array of objects with a price key). Returns the sum of every cart's total price added together, using map and reduce.
// E.g: with the `carts` array from data.js, returns 59

function sumOfAllCartTotals(cartList) {

    const totalSumOfCarts = cartList.map((cart) => {

        const totalSumForEachCart = cart.items.reduce((acc, item) => {
            return acc + item.price
        }, 0)
        return totalSumForEachCart
    })

    const totalOfAllCarts = totalSumOfCarts.reduce((acc, cart) => {
        return acc + cart
    }, 0)
    return totalOfAllCarts
}

// Exercise 8
// Create a function idOfMostExpensiveCart that receives an array of carts with an items key
// (array of objects with a price key). Returns the id of the cart with the highest total price, using map and reduce.
// E.g: with the `carts` array from data.js, returns 'CartB'

function idOfMostExpensiveCart(cartList) {

    const cartsWithTotalPrices = cartList.map((cart) => {

        const totalPricePerCart = cart.items.reduce((acc, item) => {
            return acc + item.price
        }, 0)
        return {
            id: cart.id,
            totalPrice: totalPricePerCart
        }
    })
    const mostExpensiveCart = cartsWithTotalPrices.reduce((acc, cart) => {
        return cart.totalPrice > acc.totalPrice ? cart : acc
    })
    return mostExpensiveCart.id
}

// Exercise 9
// Create a function averageOrderTotal that receives an array of orders with a products key
// (array of objects with a price key). Returns the average of all the orders' totals, using map and reduce.
// E.g: with the `orders` array from data.js, returns 15

function averageOrderTotal(orderList) {

    const totalPricesOrders = orderList.map((order) => {

        const totalEveryOrder = order.products.reduce((acc, product) => {
            return acc + product.price
        }, 0)
        return totalEveryOrder
    })

    const averageTotalCartCost = totalPricesOrders.reduce((acc, order) => {
        return acc + order
    })

    return averageTotalCartCost / orderList.length
}

// Exercise 10
// Create a function idOfCheapestOrder that receives an array of orders with a products key
// (array of objects with a price key). Returns the id of the order with the lowest total price, using map and reduce.
// E.g: with the `orders` array from data.js, returns 'OrderB'

function idOfCheapestOrder(orderList) {

    const ordersWithTotals  = orderList.map((order) => {

        const totalEveryOrder = order.products.reduce((acc, product) => {
            return acc + product.price
        }, 0)
        return {
            id: order.id,
            totalPrices: totalEveryOrder
        }
    })

    const lowPriceOrderID = ordersWithTotals .reduce((acc, order) => {
        return acc.totalPrices < order.totalPrices ? acc : order
    })

    return lowPriceOrderID.id
}

// Exercise 11
// Create a function totalCompanyPayroll that receives an array of departments with an employees key
// (array of objects with a salary key). Returns the sum of every department's total salary added together, using map and reduce.
// E.g: with the `departments` array from data.js, returns 3500

function totalCompanyPayroll(departmentList) {

    const departmentTotals = departmentList.map((department) => {

        const departmentSalaryTotal = department.employees.reduce((acc, employee) => {
            return acc + employee.salary
        }, 0)

        return departmentSalaryTotal
    })

    const totalPayroll = departmentTotals.reduce((acc, departmentTotal) => {
        return acc + departmentTotal
    }, 0)
    return totalPayroll
}

// Exercise 12
// Create a function nameOfDepartmentWithHighestPayroll that receives an array of departments with an employees key
// (array of objects with a salary key). Returns the name of the department with the highest total salary, using map and reduce.
// E.g: with the `departments` array from data.js, returns 'Finance'

function nameOfDepartmentWithHighestPayroll(departmentList) {

    const departmentTotals = departmentList.map((department) => {

        const departmentSalaryTotal = department.employees.reduce((acc, employee) => {
            return acc + employee.salary
        }, 0)

        return {
            name: department.name,
            totalSalary: departmentSalaryTotal
        }
    })

    const nameOfDepartmentWithHighestSalaries = departmentTotals.reduce((acc, departmentTotal) => {
        return acc.totalSalary < departmentTotal.totalSalary ? departmentTotal : acc
    })

    return nameOfDepartmentWithHighestSalaries.name
}

// Exercise 13
// Create a function totalActivePlayersAcrossLeague that receives an array of clubs with a players key
// (array of objects with an active key). Returns the total number of active players added together across all the clubs, using map and reduce.
// E.g: with the `clubs` array from data.js, returns 3

function totalActivePlayersAcrossLeague(clubList) {

    const activePlayersClub = clubList.map((club) => {

        const activePlayersCount = club.players.reduce((acc, player) => {
            return player.active ? acc + 1 : acc
        }, 0)
        return activePlayersCount
    })

    const totalActivePlayers = activePlayersClub.reduce((acc, team) => {
        return acc + team
    })
    return totalActivePlayers
}

// Exercise 14
// Create a function nameOfTeamWithMostActivePlayers that receives an array of clubs with a players key
// (array of objects with an active key). Returns the team name of the club with the most active players, using map and reduce.
// E.g: with the `clubs` array from data.js, returns 'Sharks'

function nameOfTeamWithMostActivePlayers(clubList) {

    const clubsWithActivePlayerCounts = clubList.map((club) => {

        const activePlayersCount = club.players.reduce((acc, player) => {
            return player.active === true ? acc + 1 : acc
        }, 0)
        return {
            team: club.team,
            totalPlayersActives: activePlayersCount
        }
    })

    const clubWithMostActivePlayers = clubsWithActivePlayerCounts.reduce((acc, team) => {
        return acc.totalPlayersActives < team.totalPlayersActives ? team : acc
    })
    return clubWithMostActivePlayers.team
}