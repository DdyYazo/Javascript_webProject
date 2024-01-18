/* Los tipos de datos en JavaScript son los siguiente*/

// 1. Number
40 // Enteros
40.5 // Flotantes

// 2. String
"Esto es un string" // Cadena de texto que se pone entre "" o ''

// 3. Boolean
true // Verdadero
false // Falso


// => Valores  placeholders o reservados para un tipo de valor faltante guardados en memoria

// 4. Null
null // Nulo (vacio)

// 5. Undefined
undefined // Indefinido (no definido)

/* Tambien existen los valores no primitivos o de tipo objetos */

// 6. Array
[1,2,3] // Arreglo de datos que se pone entre [] y separados por comas

// 7. Object
{nombre: "Juan"} // Objeto de datos que se pone entre {} y separados por comas

/* Saber los tipos de datos mediante la palabra resevada typeof */

// Tipos de datos de primitivos 

typeof 5  // 'number'
typeof "hola" // 'string'
typeof true  // 'boolean'
typeof null  // 'object' aunque es un error de JavaScript dado que null es un tipo de dato primitivo
typeof undefined // 'undefined'

// Tipos de datos de objetos
typeof console.log // 'function'
typeof {tipo: "object"} // 'object'
typeof [1,2,3] // 'object'

/* Valores por consola mediante la función console.log() */
console.log("Hola mundo"); // Devolvera el valor "Hola mundo" en la consola del navegador





