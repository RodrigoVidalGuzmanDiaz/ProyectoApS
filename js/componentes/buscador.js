import {proteina} from '../data/proteinas.js';
import {carbohidratos} from '../data/carbohidratos.js';
import {lipidos} from '../data/Lipidos.js';


export function verContenidoProteina(dato){
    let vistaBuscador = 
        '<div id="imagenYnombre">'+
        '<img id="cierre" src="https://goo.su/hbbsN">'+
        '<img id="imagen" src="'+proteina[dato].img+'">'+
            '<p id="texto">'+proteina[dato].name+'</p>'+
        '</div>'+
        '<div id="anteriorYsiguiente">'+
                '<div id="descripcionYgrafico">'+
                    '<p id="descripcion">'+proteina[dato].descripcion+'</p>'+
                    '<img id="grafico" src="'+proteina[dato].grafico+'">'+
                '</div>'+
        '</div>'
        
    ;
    return vistaBuscador;
}
export function verContenidoCarbohidratos(dato){
    let vistaBuscador = 
        '<div id="imagenYnombre">'
            +'<img id="imagen" src="'+carbohidratos[dato].img+'">'+
            '<p id="texto">'+carbohidratos[dato].name+'</p>'+
        '</div>'+
        '<div id="anteriorYsiguiente">'+
                '<div id="descripcionYgrafico">'+
                    '<p id="descripcion">'+carbohidratos[dato].descripcion+'</p>'+
                    '<img id="grafico" src="'+carbohidratos[dato].grafico+'">'+
                '</div>'+
        '</div>'
        
    ;
    return vistaBuscador;
}

export function verContenidoLipidos(dato){
    let vistaBuscador = 
        '<div id="imagenYnombre">'
            +'<img id="imagen" src="'+lipidos[dato].img+'">'+
            '<p id="texto">'+lipidos[dato].name+'</p>'+
        '</div>'+
        '<div id="anteriorYsiguiente">'+
                '<div id="descripcionYgrafico">'+
                    '<p id="descripcion">'+lipidos[dato].descripcion+'</p>'+
                    '<img id="grafico" src="'+lipidos[dato].grafico+'">'+
                '</div>'+
        '</div>'
        
    ;
    return vistaBuscador;
}



export let buscadorTodo1 = `
    
    
`;
