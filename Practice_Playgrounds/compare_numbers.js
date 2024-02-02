// En este desafío vas a recibir un parámetro secreto en la función solution. Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

export function solution(secreto) {
    secreto = Number(secreto);
    var resultado = (secreto > 5);
    return resultado;
}
solution('6'); // true
solution(4); // false
solution(5); // false