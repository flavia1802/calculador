const resultado = document.querySelector(' .total ');
const confirmar = document.querySelector(' .confirmar');

function insert( valor ){
    resultado.innerHTML += valor;
}


function clean() {
    resultado.innerHTML = ' ';
}


function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('total').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}


function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("total").innerHTML = eval(resultado.innerHTML)
    }
}