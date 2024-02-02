# JavaScript_Basics
Esta es una recopilación de los temas vistos en el Curso Básico de JavaScript



# Introducción a JavaScript


## [01_Type_datas.js](Mod_1_JS_Introduce/01_Type_datas.js): Tipos de datos en JavaScript
<p align="center">
  <img src="https://i.postimg.cc/KzFYcSRy/imagen-2024-01-16-171848600.png" alt="Aquí va el texto del enlace">
</p>

### Saber el tipo de dato con `typeof`

JavaScript tiene varios tipos de datos que se pueden identificar utilizando la palabra reservada `typeof`.

### Tipos de Datos Primitivos

```javascript
typeof 5  // 'number'
typeof "hola" // 'string'
typeof true  // 'boolean'
typeof null  // 'object' (es un error de JavaScript, dado que null es un tipo de dato primitivo)
typeof undefined // 'undefined'
```

### Tipos de Datos Objetos

```javascript
typeof console.log // 'function'
typeof {tipo: "object"} // 'object'
typeof [1,2,3] // 'object'
```


## [02_var.js](Mod_1_JS_Introduce/02_var.js): Variables

Una **variable** es un símbolo que representa un elemento no específico dentro de un conjunto particular, a menudo denominado conjunto universal de la variable. Cada elemento en este conjunto es un valor de la variable. Las variables se encuentran en algoritmos, afirmaciones y fórmulas.

### Ejemplos y Usos de las Variables

Las variables son elementos esenciales en las fórmulas, afirmaciones y algoritmos. Pueden adquirir diferentes valores mientras se mantienen dentro de un conjunto específico. Por ejemplo, la variable `"x"` pertenece al conjunto` {1, 3, 5, 7}`, lo que significa que puede ser reemplazada por cualquier número impar menor que 12. De manera similar, la variable `"y"` puede tomar valores entre 11 y 19, si se define como mayor que 10 y menor que 20.

### Uso de Variables en Programación y Javascript

En programación, una variable es un lugar en memoria en el cual podemos guardar objetos (números, texto, etc.). Esta posee un identificador o nombre con el cual podemos llamarla más tarde cuando la necesitemos.
<p align="center">
  <img src="https://i.postimg.cc/76LQv7Q0/imagen-2024-01-18-110310241.png" alt="Aquí va el texto del enlace">
</p>

<p align="center">
  <img src="https://i.postimg.cc/d1zX834C/imagen-2024-01-18-110421664.png" alt="Aquí va el texto del enlace">
</p>


En términos más específicos, una variable consta de tres elementos principales:

1. **Nombre**: El identificador que se utiliza para llamar a la variable.
2. **Valor**: El dato o información que se guarda en la variable.
3. **Tipo**: El tipo de dato que puede guardar la variable (número, texto, etc.).

### Sintaxis de las variables
1. **Declaración de Variables**
```javascript
var name; 
```
- Donde:
  - `var`: es la palabra reservada para declarar una variable.
  - `name`: es el nombre de la variable.

2. **Inicialización de Variables**
```javascript
name = "John Doe";
```
- Donde:
  - `name`: es el nombre de la variable.
  - `=`: es el operador de asignación.
  - `"John Doe"`: es el valor de la variable.

3. **Llamado de Variables**
```javascript
name; // Devolverá el valor de la variable que en este caso es "John Doe"
console.log(name); // También se puede llamar mediante la función console.log()

```
### Tipos de Variables
#### **Variables de Tipo Primitivo**
```javascript
var name = "John Doe"; // Variable de tipo string
var age = 30; // Variable de tipo number
var isAdult = true; // Variable de tipo boolean
var lastName = null; // Variable de tipo null
var x; // Variable de tipo undefined

```
#### **Variables de Tipo Objeto**
```javascript
var fruits = ["apple", 3, "orange"]; // Variable de tipo array

var person = {
    name: "John Doe", 
    age: 30
}; // Variable de tipo objeto que guarda valores de tipo string y number

var date = new Date(); // Variable de tipo fecha
var sayHi = function() { // Variable de tipo función
    console.log("Hi!");
}
var id = Symbol("id"); // Variable de tipo símbolo
var bigNumber = 1234567890123456789012345678901234567890n; // Variable de tipo BigInt
```

### Buenas practicas al declarar variables
<p align="center">
  <img src="https://i.postimg.cc/MGtdYDmV/imagen-2024-01-18-122536896.png" alt="Aquí va el texto del enlace">
</p>

## [03_function.js](Mod_1_JS_Introduce/03_function.js): Funciones en JavaScript

Las **funciones** son bloques de código que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

### Funciones Declarativas

En JavaScript, las funciones declarativas se las declara con la palabra reservada `function`.

### Cómo Declarar una Función Declarativa

La declaración de una función declarativa está constituido por las siguientes partes:

   1. **La palabra reservada `function`**: Indica el inicio de la declaración de la función.
1. **El nombre de la función**: El cual será guardado como referencia en memoria.
2. **Los parámetros**: Están envueltos en paréntesis `()`, son variables propias de la función y deberán utilizarse en el contenido. Hacen referencia a los argumentos en la invocación.
3. **El contenido**: Está envuelto por llaves `{}`, contendrá las líneas de código correspondientes a la lógica del problema.
4. **El valor retornado**: Es un único valor que devuelve la función cuando es llamada. Se lo especifica por la palabra reservada `return`. Si no existe, la función devolverá un valor `undefined` por defecto.

```javascript
// Declaración
function suma (a,b){
    return a + b
}
/* 
function nombre (parámetros) {
    contenido
    return valor
} 
}
```
- Una vez definida la lógica de la función, es necesario invocarla en el código según sea necesario.

### Como Invocar una Función Declarativa
La invocación o llamada es la manera que utilizamos las funciones para utilizar el valor de retorno (`return`) según ciertos argumentos. La invocación de la función declarativa está constituido por dos partes:

1. **El nombre de la función** especificada en la declaración.
2. **Los argumentos**, son los valores para cada uno de parámetros de la función envueltos entre paréntesis.

```javascript
suma(2,3) // nombre(argumentos)
```

- La invocación sirve para emplear una función con diferentes argumentos y guardarlos en una variable.
```javascript
var resultado1 = suma(2,3)
var resultado2 = suma(4,6)
var resultado3 = suma(10,12)

console.log(resultado1) //5
console.log(resultado2) //10
console.log(resultado3) //22
```

- También existen funciones que simplemente se invocan, pero debes tener en cuenta que retornan por defecto undefined.
```javascript
// Declaración
function saludar(nombre){
    console.log("Hola " + nombre) 
}
// Invocaciones
saludar("JavaScript") //"Hola JavaScript"
saludar("Platzi") // "Hola Platzi"
```

### Plantillas literales
También puedes utilizar las plantillas literales, una nueva característica del lenguaje para utilizar las variables dentro de `${variable}` entre las tildes invertidas `( `` )` algo similar al format o `f...{variable}` en Python,
```javascript
function grettingStudent(student) {
    console.log(`Hola ${student}`);
}
```

### Funciones Expresivas o Anónimas
Las funciones expresivas o anónimas consisten en guardar la función en una variable. Tienen la misma declaración e invocación que las funciones declarativas. La diferencia consiste en no especificar un nombre en la función, sino que utiliza el nombre de la variable, sin embargo,  la función podría o no llevar nombre, aunque es más común que se hagan anónimas..
```javascript
var suma = function (a, b) {
  return a + b
}

var resultado = suma(2, 2)

console.
```
### Diferencias entre las Funciones Declarativas y Expresivas

A las **Funciones declarativas se les aplica hoisting**, y **a la expresión de función, no**. Ya que el hoisting solo se aplica en las palabras reservadas `var` y `function`.

- Lo que quiere decir que con las `Funciones declarativas`, podemos mandar llamar la función antes de que ésta sea declarada
```javascript
saludar('Diego')
function saludar(nombre){
    console.log(`Hola ${nombre}`);
    }// Hola Diego
```
- Mientras que con la` Expresión de función`, no, tendríamos que declararla primero, y después mandarla llamar.
```javascript
nombre('Diego')
var nombre = function(nombre){
    console.log(`Hola ${nombre}`);
}//Uncaught TypeError
```
### ¿Que significa `hoisting`?
<p align="center">
  <img src="https://i.postimg.cc/3rmV4WST/imagen-2024-01-18-141527515.png" alt="Aquí va el texto del enlace">
</p>

**Hoisting** detecta primero declaraciones de variables y funciones para poder ser utilizadas, pero no su definición (valor).

Y la expresión de función al ser una función declarada dentro de una variable, detecta solamente `var nombre;` (sin valor) por lo tanto la función NO es detectada en un principio.
<p align="center">
  <img src="https://i.postimg.cc/sxdLHR2q/imagen-2024-01-18-141509124.png" alt="Aquí va el texto del enlace">
</p>

# Bases de JavaScript

## [04_scope.js](Mod_2_JS_Bases/04_scope.js): `Scope` o alcance de las variables en JS
El scope es el entorno donde las variables tienen alcance dentro del código de JavaScript. Determina el valor que tendrá la variable dependiendo de dónde se encuentre.

### Entender el scope de manera metaforica
>[!TIP]
>
> Imagina que pierdes algo importante (llaves, dinero, celular), comienzas a buscar este objeto por los lugares más cercanos en que te encuentras; si no lo encuentras, buscas en los lugares más lejanos y así sucesivamente hasta encontrarlo. Las llaves son las variables y tú eres JavaScript.

### Cadena de Scope `(Scope Chaining)`
Cuando se hace referencia a una variable, JavaScript buscará su declaración en el entorno más cercano y seguirá buscando en entornos más lejanos hasta llegar a la línea de código donde la variable esté declarada.

### Tipos de Scope
Existen dos tipos de scope: global y local. El scope local puede ser de función o de bloque.

| ![Aquí va el texto del enlace](https://i.postimg.cc/5Nmgwtvj/imagen-2024-01-21-204141835.png) | ![Aquí va el texto del enlace](https://i.postimg.cc/T36XYxWT/imagen-2024-01-21-210714861.png) |
|:---:|:---:|

### Scope Global
Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones. Pueden ser accedidas desde cualquier lugar del programa.
```javascript
var miNombre = "Diego"; // Variable global
function nombreCompleto() { // Función
    var miApellido = "De Granda"; // Variable local
    console.log(`hola ${miNombre} ${miApellido}`); // Muestra "hola Diego De Granda"
}
nombreCompleto(); // Muestra "hola Diego De Granda"
miNombre; // Muestra "Diego"
miApellido; // Muestra "Uncaught ReferenceError: miApellido is not defined"
```
### Scope Local
Las variables locales son aquellas que se encuentran declaradas dentro de los bloques de código o funciones. Solo se pueden acceder desde una función o bloque del programa.
```javascript
function nombreCompleto() { // Función
    var miNombre = "Diego"; // Variable local
    var miApellido = "De Granda"; // Segunda Variable local
    console.log(`hola ${miNombre} ${miApellido}`); // Muestra "hola Diego De Granda"
}
nombreCompleto(); // Muestra "hola Diego De Granda"
miNombre; // Muestra "Uncaught ReferenceError: miNombre is not defined"
miApellido; // Muestra "Uncaught ReferenceError: miApellido is not defined"
```



## [05_hosting-ECMAS5.js](Mod_2_JS_Bases/05_hosting-ECMAS5.js): El `hoisting` en JavaScript y buenas practicas al declarar variables

El **Hoisting** es un comportamiento de JavaScript que mueve las declaraciones de variables y funciones al inicio del scope más cercano (global o de función). Este comportamiento solo afecta a las declaraciones, no a las asignaciones.

## Hoisting en Variables

Cuando una variable es declarada con `var` pero aún no está definida, JavaScript la inicializa con un valor de `undefined`. Por ejemplo:

```javascript
console.log(nombre) // undefined
var nombre = "Andres"
```

En este caso, JavaScript interpreta el código de la siguiente manera:

```javascript
// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"
```

## Hoisting en Funciones

JavaScript permite invocar funciones antes de su declaración. Por ejemplo:

```javascript
console.log( saludar() ) // "Hola"

function saludar() {
  return "Hola";
}
```

En este caso, JavaScript interpreta el código de la siguiente manera:

```javascript
// Hoisting: Declara la función antes de ser invocada
function saludar() {
  return "Hola";
}

console.log( saludar() ); // "Hola"
```

A diferencia de las variables, JavaScript guarda las funciones en memoria durante la fase de creación de un contexto de ejecución, por lo que no se les asigna `undefined` a menos de que exista una variable como se puede visualizar en el siguiente ejemplo.

```javascript
saludo(); // Esta llamada a la función hey se procesa antes de que se declare la función.
function saludo(){ // Se declara la función hey
    return 'Hola ' + nombre;
}
var nombre = "Aaron" 
// Output: "Hola undefined"
```
1. El compilador toma las funciones y variables y las **“sube”** en el codigo, sin inicializar variables:

```javascript
var nombre;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

var nombre = "Aaron";
```

2. Le asigna memoria a la variable y le da el valor de `undefined` al suceder la asignacion de memoria

```javascript
var nombre = undefined;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

nombre = "Aaron";
```

3. Y como hemos visto, la variable se asigna como undefined y posteriormente se utiliza al llegar a la linea:
```javascript
saludos()
```

- pues ahi lo que hace es ejecutar la funcion que ya fue procesada, pero con un valor de la variable que aun no se le asigno, quedando como `undefined`.

4. Despues de correr la funcion, le asigna el valor correcto a la variable ya declarada:

```javascript
var nombre = "Aaron";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();
```

Pero ya es demasiado tarde, pues la funcion ya fue ejecutada.
  
>[!IMPORTANT]
> ### Buenas Prácticas
>
> Se recomienda declarar las variables y las funciones lo más arriba posible del código para evitar posibles errores relacionados con el Hoisting.
 
### Diferencia de buenas practicas y malas practicas  mediante un ejemplo
- **Buenas practicas**

```javascript
var miNombre = "Einar";
function saludo(){
    console.log("Hola " + miNombre); 
}
saludo(); // "Hola Einar"
```

- **Malas practicas**
  
```javascript
function saludo(){
    console.log("Hola " + miNombre); 
}
saludo();
var miNombre = "Einar"; // "Hola undefined"
```

> [!NOTE]
> ### Solución al `hoisting`
> 
> El Hoisting se soluciona con las nuevas formas de declarar variables con `let` y `const`.



## [06_coercion.js](Mod_2_JS_Bases/06_coercion.js): Coerción implícita y explicita de los tipos de datos en JavaScript

La **Coerción** es un proceso en JavaScript que convierte un tipo de dato a otro. Existen dos tipos de coerción: **implícita** y **explícita**.

### Coerción Implícita

La coerción implícita es la transformación automática de tipos realizada por JavaScript cuando se encuentran operaciones con diferentes tipos de datos. Esto puede llevar a resultados inesperados debido a la naturaleza débil y dinámicamente tipada de JavaScript. 

Ejemplos de coerción implícita:

```javascript
var a = 4 + "7"; // 47
typeof a; // string
var b = 4 * "7"; // 28
typeof b; // number
2 + true // 3
false - 3 // -3
!3 // false
```

### Coerción Explícita

La coerción explícita es la transformación controlada de tipos de datos. Se utilizan las funciones `Number()`, `String()` y `Boolean()` para convertir a tipo número, string y lógico, respectivamente.

- **Ejemplos de coerción explícita:**

```javascript
Number("47") // 47
String(51) // "51"
Boolean(1) // true

var a = 20; // 20
var b = a + ""; // string
typeof b; // string
var c = String(a); // string
typeof c; // string
var d = Number(c); // number
```

Se puede utilizar `typeof` para verificar el tipo de dato resultante:

```javascript
typeof Number("47") // 'number'
typeof String(51) // 'string'
typeof Boolean(1) // 'boolean'
```
> [!TIP]
> 
> Para evitar errores relacionados con la coerción implícita, se recomienda realizar la coerción explícita antes de realizar cualquier operación.



## [07_truthy-falsy.js](Mod_2_JS_Bases/07_truthy-falsy.js): Valores `Thruthy` y `Falsy` en JavaScript

Los valores **Truthy** y **Falsy** son aquellos que se convierten en verdadero y falso, respectivamente, cuando se realiza una coerción a booleano. Son fundamentales para manejar estructuras condicionales en JavaScript.

### Valores Falsy

Un valor Falsy es aquel que se convierte en falso en un contexto booleano. Los valores Falsy son: `0`, `""` (string vacío), `false`, `NaN`, `undefined` y `null`.

- **Ejemplos de coerción explícita a Falsy:**

```javascript
Boolean(0); // false
Boolean(""); // false
Boolean(false); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // NaN se traduce como Not a Number y es un valor especial de JavaScript que indica que no es un número por lo que es false
```

También se puede realizar una coerción implícita con el operador de negación (`!`), aunque no es recomendable.
```javascript
!!0; // false
!!""; // false
!!false; // false
!!null; // false
!!undefined; // false
!!NaN; // false
```

### Valores Truthy

Un valor Truthy es aquel que se convierte en verdadero en un contexto booleano. Todos los valores que no sean Falsy son Truthy.

- **Ejemplos de coerción explícita a Truthy:**
```javascript
Boolean(1); // true
Boolean("Hola"); // true
Boolean(true); // true
Boolean([1,2,3]); // true 
Boolena(function(){}) // true
Boolean({a:1, b:2, c:3}) // true
```

Es importante destacar que en JavaScript, todas las estructuras vacías de array y objetos son Truthy.

```javascript
Boolean([]) // true
Boolean({}) // true
```