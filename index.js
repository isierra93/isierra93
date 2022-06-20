let titulo = document.getElementById(`titulo`)
let nombre = prompt(`Ingrese su nombre:`);
titulo.innerText += ` ${nombre}!`;

let mensajeAleatorio = Math.random() * 5;
mensajeAleatorio = Math.round(mensajeAleatorio);

switch(mensajeAleatorio){
    case 1:
    mensajeAleatorio = `Tenes un 10% de descuento en nuestra pagina!`;
    break;
    case 2:
    mensajeAleatorio = `Tenes oferta de 2 x 1 !`;
    break;
    case 3:
    mensajeAleatorio = `Ganas 3 cuotas sin interes!`;
    break;
    case 4:
    mensajeAleatorio = `Si compras en los proximos 15 minutos, el envio es gratis!`;
    break;
    case 5:
    mensajeAleatorio = `50 OFF en el total de tu compra!`;
    break;
    default:
    mensajeAleatorio = `No ganaste descuento!`
}

let tituloSecundario = document.createElement(`h3`);
tituloSecundario.innerHTML = mensajeAleatorio;
document.body.append(tituloSecundario);