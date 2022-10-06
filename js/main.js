let root = document.querySelector("#root");
import {vistaDelContenido} from './componentes/vista.js';


root.innerHTML = `    
    <header id="header"></header>
       
    <div id="contenidoVista" class="contenido">
    
    <div class="buscadorTodo" id="buscadorTodo">
    <div id="barraBuscador">
    <input id="barratexto" type="text">
    </div>
    <div id="btbuscar">
        <img id="imgBuscar" class="" src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Vector.png?raw=true">
    </div>
</div>
<div id="vistaBuscador"></div>
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
import {carbohidratos} from './data/carbohidratos.js';
import {lipidos} from './data/Lipidos.js';


import {verContenidoProteina} from './componentes/buscador.js';
import {verContenidoCarbohidratos} from './componentes/buscador.js';
import {verContenidoLipidos} from './componentes/buscador.js';

//variables que se utilizaran para comenzar a trabajar

        let imgBuscar = document.querySelector("#imgBuscar")

        
function recogerValor(){
    let barratexto = document.getElementById("barratexto").value;

    let vistaBuscador = document.querySelector("#vistaBuscador")
    

    vistaBuscador.setAttribute("class","cierreSi")
    

    proteina.forEach(function(elemento, indice){
  

        if(barratexto == proteina[indice].name){
            vistaBuscador.innerHTML = verContenidoProteina(indice);
        }else{
        }
        
    });

    let btcierre = document.querySelector("#cierre")
    function cerrar(){
        let vistaBuscador = document.querySelector("#vistaBuscador")
        vistaBuscador.setAttribute("class", "cierreNo")
    }btcierre.addEventListener('click',cerrar)

    console.log(barratexto)
}imgBuscar.addEventListener("click",recogerValor)

function recogerValor1(){
    let barratexto = document.getElementById("barratexto").value;

    let vistaBuscador = document.querySelector("#vistaBuscador")

    carbohidratos.forEach(function(elemento, indice){
  

        if(barratexto == carbohidratos[indice].name){
            vistaBuscador.innerHTML = verContenidoCarbohidratos(indice);
        }else{
        }
        
    });

    let btcierre = document.querySelector("#cierre")
    function cerrar(){
        let vistaBuscador = document.querySelector("#vistaBuscador")
        vistaBuscador.setAttribute("class", "cierreNo")
    }btcierre.addEventListener('click',cerrar)

    console.log(barratexto)
}imgBuscar.addEventListener("click",recogerValor1)

function recogerValor2(){
    let barratexto = document.getElementById("barratexto").value;

    let vistaBuscador = document.querySelector("#vistaBuscador")

    lipidos.forEach(function(elemento, indice){
  

        if(barratexto == lipidos[indice].name){
            vistaBuscador.innerHTML = verContenidoLipidos(indice);
        }else{
        }
        
    });

    let btcierre = document.querySelector("#cierre")
    function cerrar(){
        let vistaBuscador = document.querySelector("#vistaBuscador")
        vistaBuscador.setAttribute("class", "cierreNo")
    }btcierre.addEventListener('click',cerrar)

    console.log(barratexto)
}imgBuscar.addEventListener("click",recogerValor2)

