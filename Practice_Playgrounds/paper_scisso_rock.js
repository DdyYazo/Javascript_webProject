/* Juego de piedra, papel o tijera en el cual se establecen las opciones en las variables antes del scope de la función y la función recibe como parámetro la opción del jugador por otro lado la opción de la máquina se genera aleatoriamente y se compara con la opción del jugador para determinar el resultado del juego. */

// Establecer las opciones
var piedra = 'piedra';
var papel = 'papel';
var tijera = 'tijera';

function solution(jugador) {

    var maquina = Math.floor(Math.random() * 3);
    if (maquina === 0) {
        maquina = piedra;
    } else if (maquina === 1) {
        maquina = papel;
    } else {
        maquina = tijera;
    }

    if (jugador === maquina) {
        return 'Empate';
    } else if (jugador === piedra && maquina === tijera || jugador === papel && maquina === piedra || jugador === tijera && maquina === papel) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}

solution(piedra); // 'Empate', 'Ganaste' o 'Perdiste'