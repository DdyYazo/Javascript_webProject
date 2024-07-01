const h1 = document.querySelector('h1');
const form  = document.getElementById('formulario')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const result = document.getElementById('resultado')

btn.addEventListener('click', sumarInputValues);

function sumarInputValues() {
    const resultadoInput = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + resultadoInput;
}


// function sumarInputValues() {
//     console.log({event});
//     event.preventDefault(); /* Permitir que al llamar al evento no se recargue la página */
//     const resultadoInput = Number(input1.value) + parseInt(input2.value);
//     result.innerText = "Resultado: " + resultadoInput;
// }