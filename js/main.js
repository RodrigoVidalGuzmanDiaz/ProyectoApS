let root = document.querySelector("#root");

root.innerHTML = `    
    <header id="header"></header>
    <section id="estadistica"></section>
    <section id="piramide"></section>`;

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