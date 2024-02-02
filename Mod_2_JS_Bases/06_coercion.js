//Ejemplos de coercion implicita
var a = 4 + "7"; // 47
typeof a; // string
var b = 4 * "7"; // 28
typeof b; // number


//Ejemplos de coercion explicita
var a = 20; // number
var b = a + ""; // string
typeof b; // string
var c = String(a); // string
typeof c; // string
var d = Number(c); // number
