// El hoisting es cuando las variables y las funciones se declaran antes de que se procese cualquier tipo de código.
// Cabe aclarar que el hoisting solo es efectivo cuando se declara una variable con var, no con let o const esto de la version ECMAScript 5 hacia abajo.

// Ejemplo de hoisting en las variables:

console.log(miNombre); // Esta llamada a la variable miNombre se procesa antes de que se declare la variable.
var miNombre = "Diego"; // Se declara la variable miNombre

// Esto es hoisting, el motor de JavaScript mueve la declaración de la variable miNombre al principio del código lo que nos permite acceder a ella antes de que se declare y no genere un error es decir:

var miNombre = undefined; // Se declara la variable miNombre
console.log(miNombre + "Soy ese hoisting"); // Esta llamada a la variable miNombre se procesa antes de que se declare la variable.

// Ahora si se asigna un valor a la variable miNombre:
miNombre = "Diego"; // Se asigna un valor a la variable miNombre

// Retornara el valor de "Diego" 


// Ejemplo de hoisting en las funciones:
hey(); // Esta llamada a la función hey se procesa antes de que se declare la función.
function hey() { // Se declara la función hey
    console.log("Hola " + miNombre); 
}// Esto mostraria un error ya que la variable miNombre no esta definida, pero gracias al hoisting la función hey se procesa antes de que se declare la variable miNombre.


function saludo(nombre){
    return "Hola" + nombre;
}
nombre = "Diego";