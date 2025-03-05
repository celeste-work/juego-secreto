let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
   console.log(intentos);

   if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto){
    asignarTextoElemento('p','El numero secreto es menor');
    } else {
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();

   }
  return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumeroSorteado);
//si ya sorteamos todos los numeros
if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
}
//Si el numero generado esta incluido en la lista
if (listaNumeroSorteado.includes(numeroGenerado)) {
    return generarNumeroSecreto();

} else {
    listaNumeroSorteado.push(numeroGenerado);
    return numeroGenerado;
}
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indicá un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializador el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
