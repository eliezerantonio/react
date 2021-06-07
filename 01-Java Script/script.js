//Hero Function

// const upperName= (name)  => name.toUpperCase();
// console.log(upperName("eliezer"));

// document.addEventListener('click',);

//evento do mouse e destruturing
function headleMouse(event) {
    console.log(event);
}

document.addEventListener('click', headleMouse);

import { areaQuadrado, perimetroQuadrado } from './quadrado.js'
import quadrado from './quadrado.js'
import numeroAleatorio from  './numeroAleatorio.js'

console.log(areaQuadrado, perimetroQuadrado)