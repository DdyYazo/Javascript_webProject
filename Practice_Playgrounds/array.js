/* En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo. */

// Utiliza el operador ternario para evaluar si el primer elemento del array es de tipo string y retornar true en caso afirmativo y false en caso contrario

export function solution(arraySecreto) {
    return typeof arraySecreto[0] === 'string' ? true : false;
}