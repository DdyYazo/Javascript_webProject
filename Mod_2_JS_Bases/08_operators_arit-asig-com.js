// JavaScript tiene un conjunto de operadores aritméticos que permiten realizar operaciones matemáticas sobre los operandos. Los operadores aritméticos estándar son los siguientes:
// Suma (+)
2 + 2; // Output: 4 porque 2 + 2 = 4
// Resta (-)
3 - 2; // Output: 1 porque 3 - 2 = 1
// Multiplicación (*)
2 * 23; // Output: 46 porque 2 * 23 = 46
// División (/)
21 / 5; // Output: 4.2 porque 21 / 5 = 4.2 que es el cociente de la división
// Módulo (%)
23 % 2; // Output: 1 porque 23 / 2 = 11 y sobra 1 que es el módulo el cual es el residuo de la división

// Incremento (++)
var a = 3;
console.log(a++); // Output: 3 porque primero se imprime el valor de a y luego se incrementa
a; // Output: 4 porque ya se incrementó
var b = 2;
console.log(++b); // Output: 2 porque primero se incrementa el valor de b y luego se imprime
b; // Output: 3 porque ya se incrementó

// Decremento (--)
var c = 3;
console.log(c--); // Output: 3 porque primero se imprime el valor de c y luego se decrementa
c; // Output: 2 porque ya se decrementó
var d = 4;
console.log(--d); // Output: 4 porque primero se decrementa el valor de d y luego se imprime
d; // Output: 3 porque ya se decrementó

// Tambien existe la concatenación de cadenas de texto (+)
"Hola " + "Mundo"; // "Hola Mundo"

// Operadores de asignación
// Asignación (=)
var a = 3; // Output: 3 porque se asigna el valor 3 a la variable a
var b = 4; // Output: 4 porque se asigna el valor 4 a la variable b

// Asignación de adición (+=)
a += b; // Output: 7 porque es equivalente a -> a = a + b

// Asignación de sustracción (-=)
a -= b; // Output: 3 porque es equivalente a -> a = a - b

// Asignación de multiplicación (*=)
a *= b; // Output: 12 porque es equivalente a -> a = a * b

// Asignación de división (/=)
a /= b; // Output: 3 porque es equivalente a -> a = a / b

// Asignación de módulo (%=)
a %= b; // Output: 3 porque es equivalente a -> a = a % b

// Operadores de comparación
// Igualdad por valor (==)
2 == 2; // Output: true porque 2 es igual a 2
2 == "2"; // Output: true porque 2 es igual a "2" ya que se hace una conversión implícita de tipos
2 == 3; // Output: false porque 2 no es igual a 3

// Igualdad estricta o por valor y tipo (===)
2 === 2; // Output: true porque 2 es igual a 2
2 === "2"; // Output: false porque 2 no es igual a "2" ya que se hace una conversión implícita de tipos
2 === 3; // Output: false porque 2 no es igual a 3

// La mas eficiente en este caso es la estricta porque evita errores de conversiones de tipos

// Desigualdad por valor (!=)
2 != 3; // Output: true porque 2 es diferente de 3
2 != "2"; // Output: false porque 2 es igual a "2" ya que se hace una conversión implícita de tipos
2 != 2; // Output: false porque 2 no es diferente de 2

// Desigualdad estricta o por valor y tipo (!==)
2 !== 3; // Output: true porque 2 es diferente de 3
2 !== "2"; // Output: true porque 2 es diferente de "2" ya que se hace una conversión implícita de tipos
2 !== 2; // Output: false porque 2 no es diferente de 2


