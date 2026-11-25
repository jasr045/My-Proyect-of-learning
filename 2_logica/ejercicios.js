// Ejercicio 1
// Crea una funcion esMayorQueDiez que reciba un numero y devuelva true si es mayor que 10
// Ej: si recibe 15 devuelve true, si recibe 3 devuelve false

function esMayorQueDiez (number) {
    if (number > 10) {
        return true
    } else {
        return false
    }
}

// Ejercicio 2
// Crea una funcion esMenorQueVeinte que reciba un numero y devuelva true si es menor que 20
// Ej: si recibe 5 devuelve true, si recibe 25 devuelve false

function esMenorQueVeinte (number) {
    if (number < 20) {
        return true
    } else {
        return false
    }
}

// Ejercicio 3
// Crea una funcion esIgualACinco que reciba un numero y devuelva true si es exactamente 5
// Ej: si recibe 5 devuelve true, si recibe 6 devuelve false

function esIgualACinco (number) {
    if (number === 5) {
        return true
    } else {
        return false
    }
}


// Ejercicio 4
// Crea una funcion esPositivo que reciba un numero y devuelva true si es mayor que 0
// Ej: si recibe 3 devuelve true, si recibe -1 devuelve false

function esPositivo (number) {
    if (number > 0) {
        return true
    } else {
        return false
    }
}

// Ejercicio 5
// Crea una funcion esNegativo que reciba un numero y devuelva true si es menor que 0
// Ej: si recibe -5 devuelve true, si recibe 2 devuelve false

function esNegativo (number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}
 

// Ejercicio 6
// Crea una funcion esPar que reciba un numero y devuelva true si es par
// Ej: si recibe 4 devuelve true, si recibe 7 devuelve false
// Ayuda: usa el operador %

function esPar (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


// Ejercicio 7
// Crea una funcion esImpar que reciba un numero y devuelva true si es impar
// Ej: si recibe 3 devuelve true, si recibe 8 devuelve false

function esImpar (number) {
  if (number % 2 !== 0) { 
    return true;
} else {
    return false;
}
}

// Ejercicio 8
// Crea una funcion tieneMasDeCincoLetras que reciba un texto y devuelva true si tiene mas de 5 letras
// Ej: si recibe 'Hola' devuelve false, si recibe 'Hola mundo' devuelve true

function tieneMasDeCincoLetras (text) {
    if (text.length > 5) {
        return true;
    } else {
        return false;
    }
}

// Ejercicio 9
// Crea una funcion estaVacio que reciba un texto y devuelva true si no tiene ningun caracter
// Ej: si recibe '' devuelve true, si recibe 'Hola' devuelve false

function estaVacio (text) {
if (text.length === 0) {
     return true} else {
        return false;
     }
}

// Ejercicio 10
// Crea una funcion ambosPositivos que reciba 2 numeros y devuelva true solo si AMBOS son positivos
// Ej: si recibe 3 y 5 devuelve true
// Ej: si recibe 3 y -1 devuelve false
// Ayuda: usa &&

function ambosPositivos (numberOne, numberTwo) {
    if (numberOne && numberTwo > 0) {
        return true;
    } else {
        return false;
    }
} 

// Ejercicio 11
// Crea una funcion ambosMayoresQueDiez que reciba 2 numeros y devuelva true solo si AMBOS son mayores que 10
// Ej: si recibe 15 y 20 devuelve true
// Ej: si recibe 15 y 5 devuelve false

function ambosMayoresQueDiez (numberOne, numberTwo) {
    if (numberOne > 10 && numberTwo > 10) {
        return true;
    } else {
        return false;
    }
}

// Ejercicio 12
// Crea una funcion ambosParesNumeros que reciba 2 numeros y devuelva true solo si AMBOS son pares
// Ej: si recibe 2 y 4 devuelve true
// Ej: si recibe 2 y 3 devuelve false

function ambosParesNumeros (numberOne, numberTwo) {
    if (numberOne %2 === 0 && numberTwo % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Ejercicio 13
// Crea una funcion numeroPositivoYTextoLargo que reciba un numero y un texto
// Devuelve true solo si el numero es positivo Y el texto tiene mas de 5 letras
// Ej: si recibe 3 y 'Hola mundo' devuelve true
// Ej: si recibe 3 y 'Hola' devuelve false

function numeroPositivoYTextoLargo (number, text) {
    if (number > 0 && text.length > 5) {
        return true;
    } else {
        return false
    }
}

// Ejercicio 14
// Crea una funcion estaEnRango que reciba un numero, un minimo y un maximo
// Devuelve true si el numero esta entre el minimo y el maximo (ambos incluidos)
// Ej: si recibe 5, 1 y 10 devuelve true
// Ej: si recibe 15, 1 y 10 devuelve false

function estaEnRango (number, minimo, maximo) {
    if (number >= minimo && number <= maximo) {
        return true;
    } else {
        return false
    }
}

// Ejercicio 15
// Crea una funcion algunoEsMayorQueDiez que reciba 2 numeros y devuelva true si AL MENOS UNO es mayor que 10
// Ej: si recibe 15 y 3 devuelve true
// Ej: si recibe 1 y 3 devuelve false
// Ayuda: usa ||

function algunoEsMayorQueDiez (numberOne, numberTwo) {
    if (numberOne > 10 || numberTwo > 10) {
        return true;
} else {
    return false;
}}

// Ejercicio 16
// Crea una funcion algunoEsPar que reciba 2 numeros y devuelva true si AL MENOS UNO es par
// Ej: si recibe 3 y 4 devuelve true
// Ej: si recibe 3 y 5 devuelve false

function algunoEsPar (numberOne, numberTwo) {
    if (numberOne % 2 === 0 || numberTwo % 2 === 0) {
        return true;
    } else {
        return false
    }
}

// Ejercicio 17
// Crea una funcion algunoEsNegativo que reciba 2 numeros y devuelva true si AL MENOS UNO es negativo
// Ej: si recibe -1 y 5 devuelve true
// Ej: si recibe 1 y 5 devuelve false

function algunoEsNegativo (numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0) {
        return true;
    } else {
        return false;
    }
}

// Ejercicio 18
// Crea una funcion algunoEsCero que reciba 2 numeros y devuelva true si AL MENOS UNO es cero
// Ej: si recibe 0 y 5 devuelve true
// Ej: si recibe 1 y 5 devuelve false

function algunoEsCero (numberOne, numberTwo) {
    if (numberOne === 0 || numberTwo === 0){
        return true;
    } else { 
        return false}
}

// Ejercicio 19
// Crea una funcion noEsPositivo que reciba un numero y devuelva true si NO es positivo (es cero o negativo)
// Ej: si recibe -3 devuelve true, si recibe 0 devuelve true, si recibe 5 devuelve false

function noEsPositivo (number) {
    if (number <= 0) {
        return true
    } else {
        return false
    }
}

// Ejercicio 20
// Crea una funcion noEsPar que reciba un numero y devuelva true si NO es par
// Ej: si recibe 3 devuelve true, si recibe 4 devuelve false

function noEsPar (number) {
    if (number % 2 !== 0) {
        return true
} else { return false
}
}

// Ejercicio 21
// Crea una funcion noEstaVacio que reciba un texto y devuelva true si NO esta vacio
// Ej: si recibe 'Hola' devuelve true, si recibe '' devuelve false

function noEstaVacio (text) {
    if (text.length) {
        return true
    } else {return false}
}

// Ejercicio 22
// Crea una funcion soloElPrimeroEsPositivo que reciba 2 numeros
// Devuelve true si el primero es positivo Y el segundo NO lo es
// Ej: si recibe 5 y -3 devuelve true
// Ej: si recibe 5 y 3 devuelve false

function soloElPrimeroEsPositivo (numberOne, numberTwo) {
    if (numberOne > 0 && numberTwo <= 0) {
        return true
    } else {
        return false
    }
}

// Ejercicio 23
// Crea una funcion ningunoEsNegativo que reciba 2 numeros y devuelva true si NINGUNO es negativo
// Ej: si recibe 3 y 0 devuelve true
// Ej: si recibe 3 y -1 devuelve false

function ningunoEsNegativo (numberOne, numberTwo) {
    if (numberOne >= 0 && numberTwo >= 0) {
        return true
    } else {
        return false
    }
}

// Ejercicio 24
// Crea una funcion ambosTextosCortos que reciba 2 textos
// Devuelve true si AMBOS tienen menos de 5 letras
// Ej: si recibe 'Hola' y 'Hi' devuelve true
// Ej: si recibe 'Hola' y 'Hola mundo' devuelve false

function ambosTextosCortos (textOne, textTwo) {
    if (textOne.length < 5 && textTwo.length < 5) {
        return true
    } else {
        return false
    }
}