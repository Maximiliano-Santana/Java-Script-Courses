const x = document.getElementById('x');
const y = document.getElementById('y');
const boton = document.querySelector('#button-calculate');
const result = document.querySelector('.result')


function btnOnClick() {
    console.log('clic del boton')
}

boton.addEventListener('click', () => {
    const resultado = Number(x.value) + Number(y.value)
    result.innerText = 'Resultado: ' + resultado
})