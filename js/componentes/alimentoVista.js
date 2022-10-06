import {proteina} from '../data/proteinas.js';
import {alimentos} from './alimentos.js';

export function graficoVer(){
    let grafico = document.querySelector("#grafico")

    proteina.forEach(function(elemento,indice){
        let div = document.createElement("div")
        div.setAttribute("class","alimentoAli")
        div.innerHTML = alimentos(indice);

        grafico.appendChild(div);

    })
}

