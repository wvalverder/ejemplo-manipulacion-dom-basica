
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular');
const resultadoMostrar = document.getElementById('resultadoMostrar');
const form =  document.querySelector('#form');

form.addEventListener('submit', SumarInputsValue) //esto quiere decir que el evento submit le manda a la funcion SumarInputs

function SumarInputsValue(event) {
    console.log({event});
    event.preventDefault();
    const inputs = Number(input1.value) + Number(input2.value);
    resultadoMostrar.innerHTML = `La suma es : ${inputs}`;
}
