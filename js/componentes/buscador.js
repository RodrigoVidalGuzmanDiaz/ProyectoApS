import {proteina} from '../data/proteinas.js';

export function verContenido(dato){
    let vistaBuscador = 
        '<div id="imagenYnombre">'
            +'<img id="imagen" src="'+proteina[dato].img+'">'+
            '<p>'+proteina[dato].name+'</p>'+
        '</div>'+
        '<div id="anteriorYsiguiente">'+
            '<div id="anterior">'+'<img src="https://goo.su/HfjY6n7">'+'</div>'+
                '<div id="descripcionYgrafico">'+
                    '<p id="descripcion">'+proteina[dato].descripcion+'</p>'+
                    '<img id="grafico" src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Imagenes/image%2010.png?raw=true">'+
                '</div>'+
            '<div id="siguiente">'+'<img src="https://goo.su/DKi4T">'+'</div>'+
        '</div>'
        
    ;
    return vistaBuscador;
}

export let buscadorTodo1 = `
    
    <div id="barraBuscador">
        <input id="barratexto" type="text">
    </div>
    <div id="btbuscar">
        <img id="imgBuscar" class="" src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Vector.png?raw=true">
    </div>
`;
