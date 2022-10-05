let root = document.querySelector("#root");
import {vistaDelContenido} from './componentes/vista.js';


root.innerHTML = `    
    <header id="header"></header>
    <div class="buscadorTodo" id="buscadorTodo">
            
        </div>
       <div id="vistaBuscador">
            
       </div>
       
    <div id="contenidoVista" class="contenido">
        <section id="estadistica"></section>
        <section id="piramide"></section>
    </div>
    <footer id="foo"></footer>`;

//agregando el header al root
import {header1} from './componentes/header.js';
let header = document.querySelector("#header");
header.innerHTML = header1;


//agregando la estadistica al root
import {estadistica1} from './componentes/estadistica.js';
let estadistica = document.querySelector("#estadistica");
estadistica.innerHTML = estadistica1;

//agregando la piramide al root
import {piramide1} from './componentes/piramide.js';
let piramide = document.querySelector("#piramide");
piramide.innerHTML = piramide1;

import {footer1} from './componentes/footer.js';
let footer = document.querySelector("#foo");
footer.innerHTML = footer1;

vistaDelContenido();



import {proteina} from './data/proteinas.js';

import {verContenido} from './componentes/buscador.js';


import {buscadorTodo1} from './componentes/buscador.js';
let buscadorTodo = document.querySelector("#buscadorTodo")
buscadorTodo.innerHTML = buscadorTodo1;
//variables que se utilizaran para comenzar a trabajar

        let imgBuscar = document.querySelector("#imgBuscar")

export function recogerValor(){
    let barratexto = document.getElementById("barratexto").value;

    let vistaBuscador = document.querySelector("#vistaBuscador")

    proteina.forEach(function(elemento, indice){
  

        if(barratexto == proteina[indice].name){
            vistaBuscador.innerHTML = verContenido(indice);
        }else{
        }
        
    });


    console.log(barratexto)
}
imgBuscar.addEventListener("click",recogerValor)