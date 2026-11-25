// Exercise 1
// Create a function getNamesOfUsersWithManyPoints that receives an array of users with a points key
// (array of numbers) and a limit. Returns the names of the users whose point total is greater than the limit, using filter and map.
// E.g: with the `users` array from data.js and limit 25, returns ['Alice', 'Charlie']

function getNamesOfUsersWithManyPoints(usersList, limit) {

    const highestScore = usersList.filter((user) => {

        const totalPoints = user.points.reduce((acc, point) => {

            return acc + point
        }, 0)

        return totalPoints > limit
    })

    const finalNames = highestScore.map((user) => {

        return user.name
    })
    return finalNames
}

// Exercise 2
// Create a function getNamesOfUsersWithFewPoints that receives an array of users with a points key
// (array of numbers) and a limit. Returns the names of the users whose point total is less than the limit, using filter and map.
// E.g: with the `users` array from data.js and limit 10, returns ['Dana']

function getNamesOfUsersWithFewPoints(usersList, limit) {

    const lowestScore = usersList.filter((user) => {

        const totalPoint = user.points.reduce((acc, point) => {

            return acc + point
        }, 0)

        return totalPoint < limit
    })

    const finalUsers = lowestScore.map((user) => {
        return user.name
    })

    return finalUsers
}

// Exercise 3
// Create a function getNamesOfTeamsWithBigWin that receives an array of teams with a scores key
// (array of numbers) and a limit. Returns the names of the teams that have at least one score greater than the limit, using filter and map.
// E.g: with the `teams` array from data.js and limit 15, returns ['Lions', 'Eagles']

function getNamesOfTeamsWithBigWin(teamsList, limit) {

    const teamsWithBigWin = teamsList.filter((team) => {

        const bigWin = team.scores.some((score) => {

            return score > limit
        })
        return bigWin
    })

    const finalTeam = teamsWithBigWin.map((user) => {

        return user.team
    })
    return finalTeam
}

// Exercise 4
// Create a function getNamesOfTeamsWithAllGoodScores that receives an array of teams with a scores key
// (array of numbers) and a limit. Returns the names of the teams where every score is greater than or equal to the limit, using filter and map.
// E.g: with the `teams` array from data.js and limit 10, returns ['Eagles', 'Wolves']

function getNamesOfTeamsWithAllGoodScores(teamsList, limit) {

    const teamsWithAllGoodScores = teamsList.filter((team) => {

        const allScoresBig = team.scores.every((score) => {

            return score >= limit
        })
        return allScoresBig
    })

    const finalTeam = teamsWithAllGoodScores.map((user) => {

        return user.team
    })
    return finalTeam
}

// Exercise 5
// Create a function getNamesOfPassingStudents that receives an array of students with a grades key
// (array of numbers) and a minimum grade. Returns the names of the students whose grades are all greater than or equal to the minimum grade, using filter and map.
// E.g: with the `students` array from data.js and minimum grade 5, returns ['Eve', 'Grace']

function getNamesOfPassingStudents(studentsList, gradeMinimum) {

    const approvedStudents = studentsList.filter((student) => {

        const allGradesAboveMinimum = student.grades.every((grade) => {

            return grade >= gradeMinimum
        })
        return allGradesAboveMinimum
    })

    const studentPassesCourse = approvedStudents.map((student) => {

        return student.name
    })
    return studentPassesCourse
}

// Exercise 6
// Create a function getNamesOfStudentsWithSomeFailingGrade that receives an array of students with a grades key
// (array of numbers) and a minimum grade. Returns the names of the students that have at least one grade lower than the minimum grade, using filter and map.
// E.g: with the `students` array from data.js and minimum grade 5, returns ['Frank', 'Hank']

function getNamesOfStudentsWithSomeFailingGrade(studentsList, gradeMinimum) {

    const failedStudents = studentsList.filter((student) => {

        const hasFailingGrade = student.grades.some((grade) => {

            return grade < gradeMinimum
        })
        return hasFailingGrade
    })

    const studentNoPassesCourse = failedStudents.map((student) => {

        return student.name
    })
    return studentNoPassesCourse
}

// Exercise 7
// Create a function getNamesOfProductsAvailableAtStore that receives an array of products with a stores key
// (array of numbers) and a stock value. Returns the names of the products that have that stock value in at least one of their stores, using filter and map.
// E.g: with the `products` array from data.js and value 0, returns ['Shirt', 'Shoes']

function getNamesOfProductsAvailableAtStore(productsList, inventoryValue) {

    const productsInStock = productsList.filter((product) => {

        const sameStore = product.stores.some((store) => {

            return store === inventoryValue
        })
        return sameStore
    })

    const finalProduct = productsInStock.map((product) => {

        return product.name
    })
    return finalProduct
}

// Exercise 8
// Create a function getNamesOfProductsNeverInStock that receives an array of products with a stores key
// (array of numbers). Returns the names of the products whose stock is 0 in every store, using filter and map.
// E.g: with the `products` array from data.js, returns ['Shoes']

function getNamesOfProductsNeverInStock(productsList) {

    const productsNeverInStock = productsList.filter((product) => {

        const allStoresEmpty = product.stores.every((store) => {

            return store === 0
        })
        return allStoresEmpty
    })

    const productNames = productsNeverInStock.map((product) => {

        return product.name
    })
    return productNames
}

// Exercise 9
// Create a function getIdsOfExpensiveCarts that receives an array of carts with an items key
// (array of objects with a price key) and a limit. Returns the ids of the carts whose total price is greater than the limit, using filter and map.
// E.g: with the `carts` array from data.js and limit 25, returns ['Cart1', 'Cart4']

function getIdsOfExpensiveCarts(cartsList, limit) {

    const expensiveCarts = cartsList.filter((cart) => {

        const totalPrice = cart.items.reduce((acc, item) => {

            return acc + item.price
        }, 0)
        return totalPrice > limit
    })

    const cartIds = expensiveCarts.map((cart) => {

        return cart.id
    })
    return cartIds
}

// Exercise 10
// Create a function getIdsOfCheapCarts that receives an array of carts with an items key
// (array of objects with a price key) and a limit. Returns the ids of the carts whose total price is less than the limit, using filter and map.
// E.g: with the `carts` array from data.js and limit 10, returns ['Cart2']

function getIdsOfCheapCarts(cartsList, limit) {

    const cheapCarts = cartsList.filter((cart) => {

        const totalPrice = cart.items.reduce((acc, item) => {

            return acc + item.price
        }, 0)
        return totalPrice < limit
    })

    const cartIds = cheapCarts.map((cart) => {

        return cart.id
    })
    return cartIds
}

// Exercise 11
// Create a function getNamesOfOrdersWithExpensiveProduct that receives an array of orders with a products key
// (array of objects with a price key) and a limit. Returns the names of the orders that have at least one product more expensive than the limit, using filter and map.
// E.g: with the `orders` array from data.js and limit 20, returns ['Order1', 'Order3']

function getNamesOfOrdersWithExpensiveProduct(ordersList, limit) {

    const expensiveOrder = ordersList.filter((order) => {

        const expensiveProduct = order.products.some((product) => {

            return product.price > limit
        })
        return expensiveProduct
    })

    const orderNames = expensiveOrder.map((order) => {

        return order.name
    })
    return orderNames
}

// Exercise 12
// Create a function getNamesOfOrdersWithOnlyCheapProducts that receives an array of orders with a products key
// (array of objects with a price key) and a limit. Returns the names of the orders where every product costs at most the limit, using filter and map.
// E.g: with the `orders` array from data.js and limit 20, returns ['Order2', 'Order4']

function getNamesOfOrdersWithOnlyCheapProducts(ordersList, limit) {

    const ordersWithLowPricedProduct = ordersList.filter((order) => {

        const cheapProduct = order.products.every((product) => {

            return product.price <= limit
        })
        return cheapProduct
    })

    const orderNames = ordersWithLowPricedProduct.map((order) => {

        return order.name
    })
    return orderNames
}

// Exercise 13
// Create a function getNamesOfDepartmentsWithHighTotalSalary that receives an array of departments with an employees key
// (array of objects with a salary key) and a limit. Returns the names of the departments whose total salary is greater than the limit, using filter and map.
// E.g: with the `departments` array from data.js and limit 600, returns ['Engineering', 'HR']

function getNamesOfDepartmentsWithHighTotalSalary(departmentsList, limit) {

    const departmentsMostExpensive = departmentsList.filter((department) => {

        const everyDepartment = department.employees.reduce((acc, employee) => {

            return acc + employee.salary
        }, 0)
        return everyDepartment > limit
    })

    const departmentNames = departmentsMostExpensive.map((name) => {

        return name.department
    })
    return departmentNames
}

// Exercise 14
// Create a function getNamesOfDepartmentsWithFewEmployees that receives an array of departments with an employees key
// (array of objects) and a limit. Returns the names of the departments whose number of employees is less than the limit, using filter and map.
// E.g: with the `departments` array from data.js and limit 2, returns ['Sales', 'HR']

function getNamesOfDepartmentsWithFewEmployees(departmentsList, limit) {

    const lessEmployees = departmentsList.filter((department) => {

        return department.employees.length < limit
    })

    const departmentNames = lessEmployees.map((name) => {

        return name.department
    })
    return departmentNames
}