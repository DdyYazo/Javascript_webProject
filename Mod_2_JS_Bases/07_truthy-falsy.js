/* Los valores thruthy son aquellos que al convertirlos a booleanos son true*/
// Valores thruthy
Boolean(1); // true
Boolean("Hola"); // true
Boolean(true); // true
Boolean([1,2,3]); // true 
Boolena(function(){}) // true
Boolean({a:1, b:2, c:3}) // true

/* Los valores falsy son aquellos que al convertirlos a booleanos son false */

// Valores falsy
Boolean(0); // false
Boolean(""); // false
Boolean(false); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // NaN se traduce como Not a Number y es un valor especial de JavaScript que indica que no es un número por lo que es false

/* Coerción implícita en los valores thruthy y falsy (No recomendada) */
// Valores falsy
!!0; // false
!!""; // false
!!false; // false
!!null; // false
!!undefined; // false
!!NaN; // false


