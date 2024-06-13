/* En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado". */

// Ademas se debe defirnir cada articulo usando un switch case e imprime el mensaje correspondiente a cada uno de ellos usando plantillas literales

export function solution(articulo) {
    switch (articulo) {
        case "computadora":
            return `Con mi computadora puedo programar usando JavaScript`;
        case "celular":
            return `En mi celular puedo aprender usando la app de Platzi`;
        case "cable":
            return `¡Hay un cable en mi bota!`;
        default:
            return `Artículo no encontrado`;
    }
}

if (false === !true) { 
        console.log(false == true) 
    } else { 
        console.log(true === !false)
    }

// Retorna falso por que en la primera condición se esta comparando si false es igual a true lo cual es falso y en la segunda condición se esta comparando si true es igual a no false lo cual es verdadero
