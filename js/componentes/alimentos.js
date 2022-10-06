import { proteina } from "../data/proteinas.js";


export function alimentos(alimentoN){
    let alimento = 
    '<div id="alimento">'+'<img id="alimentoImg" src="'+proteina[alimentoN].img+'">'+'<div id="alimentoDes">'+proteina[alimentoN].descripcion+'</div>'+'</div>'+
    '<img id="alimentoGrafico" src="'+proteina[alimentoN].grafico+'">'
    ;

    return alimento;
}