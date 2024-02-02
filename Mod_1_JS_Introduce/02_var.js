/* En javascript se puede declarar una variable sin necesidad de especificar el tipo de dato
 */

// 1. Declarar una variable:
var name; 
/* donde:
- var: es la palabra reservada para declarar una variable
- name: es el nombre de la variable
 */

// 2. Inicializar una variable:
name = "John Doe";
/* donde:
- name: es el nombre de la variable
- =: es el operador de asignación
- "John Doe": es el valor de la variable
 */

// 3. llamar la variable:
name; // Devolvera el valor de la variable que en este caso es "John Doe"

// => O tambien se puede llamar mediante la función console.log()
console.log(name); // Devolvera el valor de la variable que en este caso es "John Doe"

/*  Variables de tipo primitivo */
var name = "John Doe"; // Variable de tipo string
var age = 30; // Variable de tipo number
var isAdult = true; // Variable de tipo boolean
var lastName = null; // Variable de tipo null
var x; // Variable de tipo undefined

/*  Variables de tipo objeto */
var fruits = ["apple", 3, "orange"]; // Variable de tipo array

var person = {
    name: "John Doe", 
    age: 30
}; // Variable de tipo objeto que guarda valores de tipo string y number

var date = new Date(); // Variable de tipo fecha
var sayHi = function() { // Variable de tipo función
    console.log("Hi!");
}
var id = Symbol("id"); // Variable de tipo simbolo
var bigNumber = 1234567890123456789012345678901234567890n; // Variable de tipo bigInt
