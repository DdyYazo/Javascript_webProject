// El scope en JavaScript es el alcance que tienen las variables dentro del código.
// En JavaScript existen dos tipos de scope: global y local.
// El scope global es cuando una variable se declara fuera de una función y se puede acceder a ella desde cualquier parte del código.
// Ejemplo de scope global:
var miNombre = "Diego"; // Variable global
function nombreCompleto() { // Función
    var miApellido = "De Granda"; // Variable local
    console.log(`hola ${miNombre} ${miApellido}`); // Muestra "hola Diego De Granda"
}
nombreCompleto(); // Muestra "hola Diego De Granda"
miNombre; // Muestra "Diego"
miApellido; // Muestra "Uncaught ReferenceError: miApellido is not defined"

// El scope local es cuando una variable se declara dentro de una función y solamente se puede acceder a ella dentro de la función.
// Ejemplo de scope local:
function nombreCompleto() { // Función
    var miNombre = "Diego"; // Variable local
    var miApellido = "De Granda"; // Segunda Variable local
    console.log(`hola ${miNombre} ${miApellido}`); // Muestra "hola Diego De Granda"
}
nombreCompleto(); // Muestra "hola Diego De Granda"
miNombre; // Muestra "Uncaught ReferenceError: miNombre is not defined"
miApellido; // Muestra "Uncaught ReferenceError: miApellido is not defined"