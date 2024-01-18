# JavaScript_Basics
Esta es una recopilación de los temas vistos en el Curso Básico de JavaScript



## [01_Type_datas.js](JS-B_Classes/01_Type_datas.js): Tipos de datos en JavaScript
![Tipos de datos en JS](https://i.postimg.cc/KzFYcSRy/imagen-2024-01-16-171848600.png)

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


## [02_var.js](JS-B_Classes/02_var.js): Variables

Una **variable** es un símbolo que representa un elemento no específico dentro de un conjunto particular, a menudo denominado conjunto universal de la variable. Cada elemento en este conjunto es un valor de la variable. Las variables se encuentran en algoritmos, afirmaciones y fórmulas.

### Ejemplos y Usos de las Variables

Las variables son elementos esenciales en las fórmulas, afirmaciones y algoritmos. Pueden adquirir diferentes valores mientras se mantienen dentro de un conjunto específico. Por ejemplo, la variable `"x"` pertenece al conjunto` {1, 3, 5, 7}`, lo que significa que puede ser reemplazada por cualquier número impar menor que 12. De manera similar, la variable `"y"` puede tomar valores entre 11 y 19, si se define como mayor que 10 y menor que 20.

### Uso de Variables en Programación y Javascript

En programación, una variable es un lugar en memoria en el cual podemos guardar objetos (números, texto, etc.). Esta posee un identificador o nombre con el cual podemos llamarla más tarde cuando la necesitemos.

![VarReprest](https://i.postimg.cc/76LQv7Q0/imagen-2024-01-18-110310241.png)

![VarCompr](https://i.postimg.cc/d1zX834C/imagen-2024-01-18-110421664.png)

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
![](https://i.postimg.cc/MGtdYDmV/imagen-2024-01-18-122536896.png)


## [02_var.js](JS-B_Classes/02_var.js): Funciones en JavaScript

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

![](https://i.postimg.cc/3rmV4WST/imagen-2024-01-18-141527515.png)
**Hoisting** detecta primero declaraciones de variables y funciones para poder ser utilizadas, pero no su definición (valor).

Y la expresión de función al ser una función declarada dentro de una variable, detecta solamente `var nombre;` (sin valor) por lo tanto la función NO es detectada en un principio.

![](https://i.postimg.cc/sxdLHR2q/imagen-2024-01-18-141509124.png)

