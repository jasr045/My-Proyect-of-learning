// Ejercicio 1
// Crea una funcion mostrarNumeros que reciba un numero n
// y muestre en consola todos los numeros del 1 hasta n
// Ej: si recibe 3 hace console.log de 1, 2 y 3
 
function mostrarNumeros (number) {
    for (let i=1; i <= number; i++) {
      console.log(i)
    }
 }

// Ejercicio 2
// Crea una funcion mostrarPares que reciba un numero n
// y muestre en consola todos los numeros pares del 1 hasta n
// Ej: si recibe 8 hace console.log de 2, 4, 6 y 8

function mostrarPares(number) {
  for (let i = 1; i <= number; i++) {
     if (i % 2 === 0) {
       console.log(i);
     }
 }
}

// Ejercicio 3
// Crea una funcion mostrarImpares que reciba un numero n
// y muestre en consola todos los numeros impares del 1 hasta n
// Ej: si recibe 7 hace console.log de 1, 3, 5 y 7

function mostrarImpares (number) {
  for (let i=1; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
}

// Ejercicio 4
// Crea una funcion cuentaAtras que reciba un numero n
// y muestre en consola la cuenta atras desde n hasta 1
// Ej: si recibe 4 hace console.log de 4, 3, 2 y 1

function cuentaAtras (number) {
  for ( let i=number; i>=1; i--) {
    console.log(i)
  }
}

// Ejercicio 5
// Crea una funcion mostrarMultiplos que reciba un multiplo y un limite
// y muestre en consola todos los multiplos de ese numero hasta el limite
// Ej: si recibe 3 y 12 hace console.log de 3, 6, 9 y 12

function mostrarMultiplos (multiplo, limite) {
  for (let i = multiplo; i <= limite; i+= multiplo) {
    console.log(i)
  }
} 

// Ejercicio 6
// Crea una funcion sumaDeUnoAN que reciba un numero n
// y devuelva la suma de todos los numeros del 1 hasta n usando un bucle for
// Ej: si recibe 5 devuelve 15 (1+2+3+4+5)

function sumaDeUnoAN (number) {
  let suma = 0
  for (let i=1; i<=number; i++) {
    suma = i + suma
  } 
  return suma;
}

// Ejercicio 7
// Crea una funcion contarParesHastaN que reciba un numero n
// y devuelva cuantos numeros pares hay entre 1 y n
// Ej: si recibe 10 devuelve 5 (2, 4, 6, 8, 10)

function contarParesHastaN (number) {
  let contador = 0
  for (let i=1; i<= number; i++){
    if (i %2 === 0) {
      contador++; 
    }
  } return contador 
}

// Ejercicio 8
// Crea una funcion contarImparesHastaN que reciba un numero n
// y devuelva cuantos numeros impares hay entre 1 y n
// Ej: si recibe 9 devuelve 5 (1, 3, 5, 7, 9)

function contarImparesHastaN (number) {
  let contador = 0;
  for ( let i=1; i<= number; i++) {
    if (i %2 !== 0) {
      contador++;
    }
  } return contador;
}
 
// Ejercicio 9
// Crea una funcion repetirTexto que reciba un texto y un numero n
// y devuelva ese texto concatenado n veces
// Ej: si recibe 'Hola' y 3 devuelve 'HolaHolaHola'

 function repetirTexto (text, number) {
  let suma = ""
  for (let i=0; i< number; i++){
      suma = suma + text
  }
  return suma
 }

// Ejercicio 10
// Crea una funcion productoDeUnoAN que reciba un numero n
// y devuelva el resultado de multiplicar todos los numeros del 1 hasta n
// Ej: si recibe 5 devuelve 120 (1*2*3*4*5)

function productoDeUnoAN (number) {
  let contador =1;
  for (i=1; i<= number ; i++) {
    contador = i * contador
  }  return contador
}

// Ejercicio 11
// Crea una funcion sumaDeMultiplosDe que reciba un multiplo y un limite
// y devuelva la suma de todos los multiplos de ese numero hasta el limite
// Ej: si recibe 3 y 12 devuelve 30 (3+6+9+12)

function sumaDeMultiplosDe (multiplo, limite) {
  let suma= 0;
  for (i = multiplo; i<= limite; i+=  multiplo) {
    suma = suma + i
  } return suma
}

// Ejercicio 12
// Crea una funcion contarMultiplosDe que reciba un multiplo y un limite
// y devuelva cuantos multiplos de ese numero hay hasta el limite
// Ej: si recibe 4 y 20 devuelve 5 (4, 8, 12, 16, 20)

function contarMultiplosDe (multiplo, limite) {
  let contador = 0;
  for (i=multiplo; i<= limite; i+= multiplo) {
    contador++;
  } return contador
}