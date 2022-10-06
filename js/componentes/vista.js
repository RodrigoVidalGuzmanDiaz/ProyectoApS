import {proteina} from '../data/proteinas.js';
import {carbohidratos} from '../data/carbohidratos.js';
import {lipidos} from '../data/Lipidos.js';



import {verContenidoProteina} from './buscador.js';
import {verContenidoCarbohidratos} from './buscador.js';
import {verContenidoLipidos} from './buscador.js';



import {graficoVer} from './alimentoVista.js';
//variables que se utilizaran para comenzar a trabajar


export function vistaDelContenido(){

    let body = document.getElementById('body')

 let contenidoVista = document.getElementById('contenidoVista')
 let imgLogo = document.querySelector('.imgLogo')
 let btProteinas =  document.getElementById('btProteinas');
 let btCarbohidratos =  document.querySelector('#btCarbohidratos');
 let btLípidos =  document.querySelector('#btLípidos');






        function contenidoHomePage(){
            contenidoVista.innerHTML= `
            <section id="estadistica"></section>
            <section id="piramide"></section>
            `;

        }
        imgLogo.addEventListener('click', contenidoHomePage);



        function contenidoProteina(){
            body.setAttribute("class","fondoBodyProteinas")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
            <section class= "contenerdorProteinas">
                    
            
                <div class="buscadorTodo" id="buscadorTodo">
                    <div id="barraBuscador">
                    <input id="barratexto" type="text">
                    </div>
                    <div id="btbuscar">
                        <img id="imgBuscar" class="" src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Vector.png?raw=true">
                    </div>
                </div>
                <div id="vistaBuscador"></div>




                <div class="Superior">
                <iframe id="datg"width="560" height="315" src="https://www.youtube.com/embed/RPeyUToLKiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <section class="contenidoMedidas">
                    <div class="informacionProteinas">
                        <h3 class="tituloProteinas">Proteínas</h3>
                        <p class="textoProteinas">Las proteínas son moléculas grandes y complejas que desempeñan muchas funciones críticas en el cuerpo. Realizan la mayor parte del trabajo en las células y son necesarias para la estructura, función y regulación de los tejidos y órganos del cuerpo.</p>
                        <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Ellipse18.png?raw=true">
                        <p class="textoProteinas"> Las proteínas están formadas por aminoácidos y esta secuencia está determinada por la secuencia de nucleótidos de su gen correspondiente.</p>
                    </div>
                    <div id="grafico" class="grafico">
     
                        <div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%204.png"><div id="alimentoDes">Ternera(100g)<br>"Proteinas:20%"<br>Carbohidratos:0% <br>Lípídos:20%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2010.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%205.png"><div id="alimentoDes">Salmón(100g)<br>Proteinas:20% <br>Carbohidratos:0% <br>Lípídos:10%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%208.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2028.png"><div id="alimentoDes">Nuez(100g)<br>Proteinas:15.9%<br>Carbohidratos:8.2%<br>Lípídos:75.9</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2029.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2030.png"><div id="alimentoDes">Almendra(100g)<br>Proteinas:13.3%<br>Carbohidratos:8.8%<br>Lípídos:77.9%,</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2031.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2032.png"><div id="alimentoDes">nueces(100g)<br>Proteinas:16.9%<br>Carbohidratos:8.4%<br>Lípídos:74.7%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2033.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2034.png"><div id="alimentoDes">Nuez de macadamia(100g)<br>Proteinas:47.7% <br>Carbohidratos:4.5%<br>Lípídos:47.7%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2035.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2036.png"><div id="alimentoDes">pistacho(100g)<br>Proteinas:21.4%<br>Carbohidratos:8.3%<br>Lípídos:70.3%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2037.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2038.png"><div id="alimentoDes">garbanzo(100g)<br>Proteinas:49.5%<br>Carbohidratos:3.4%<br>Lípídos:47.1%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2039.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2040.png"><div id="alimentoDes">guisantes secos(100g)<br>Proteinas:40.0%<br>Carbohidratos:59.7%<br>Lípídos:0.3%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2041.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Proteinas/image%2042.png"><div id="alimentoDes">Soja(100g)<br>Proteinas:23.4%<br>Carbohidratos:6.2%<br>Lípídos:70.4%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaProteinas/image%2043.png"></div></div>
                </section>
            </section>
            `;
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
        }imgBuscar.addEventListener("click", recogerValor)
        }
        btProteinas.addEventListener('click', contenidoProteina);
        

        




    /******************************************************************************************/

        function contenidoCarbohidratos(){
            body.setAttribute("class","fondoBodyCarbohidratos")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
            <section>
            
            <div class="buscadorTodo" id="buscadorTodo">
                <div id="barraBuscador">
                <input id="barratexto" type="text">
                </div>
                <div id="btbuscar">
                <img id="imgBuscar" class="" src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Vector.png?raw=true">
                </div>
            </div>
            <div id="vistaBuscador"></div>



                <div class="Superior">
                <iframe id="cab" width="560" height="315" src="https://www.youtube.com/embed/JUXOKbOmk30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <section class="contenidoMedidas">
                    <div class="informacionCarbohidratos">
                        <h3 class="tituloCarbohidratos">Carbohidratos</h3>
                        <p class="textoCarbohidratos">Los glúcidos, carbohidratos, hidratos de carbono o sacáridos son biomoléculas compuestas principalmente de carbono, hidrógeno y oxígeno, aunque algunos de ellos también contienen otros bioelementos tales como: nitrógeno, azufre y fósforo.</p>
                        <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/carbohidratos.png?raw=true">
                        <p class="textoCarbohidratos">Se llaman hidratos de carbono, ya que a nivel químico contienen carbono, hidrógeno y oxígeno.</p>
                    </div>
                    <div id="grafico" class="grafico">
     
                        <div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2013.png"><div id="alimentoDes">fideos(160g)<br>Proteinas:9%<br>Carbohidratos:49%<br>Lípídos:1%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2014.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2015.png"><div id="alimentoDes">Pan blanco(60g)<br>Proteinas:5%<br>Carbohidratos:29%<br>Lípídos:2%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2016.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2017.png"><div id="alimentoDes">Piña(85g)<br>Proteinas:0%<br>Carbohidratos:11%<br>Lípídos:0%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2018.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2044.png"><div id="alimentoDes">Arroz Integral(100g)<br>Proteinas:17.9%<br>Carbohidratos:81.6%<br>Lípídos:0.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2045.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2046.png"><div id="alimentoDes">Avena(100g)<br>Proteinas:14.0%<br>Carbohidratos:84.6%<br>Lípídos:1.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2047.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2048.png"><div id="alimentoDes">Centeno(100g)<br>Proteinas:15.3%<br>Carbohidratos:84.2%<br>Lípídos:0.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2049.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2050.png"><div id="alimentoDes">Pan tostado(100g)<br>Proteinas:14.0%<br>Carbohidratos:84.6%<br>Lípídos:1.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2051.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2052.png"><div id="alimentoDes">Pan de trigo(100g)<br>Proteinas:14.0%<br>Carbohidratos:84.6%<br>Lípídos:1.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2053.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2054.png"><div id="alimentoDes">Empanadas(100g)<br>Proteinas:33.1%<br>Carbohidratos:66.9%<br>Lípídos:0.0%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2055.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Carbohidratos/image%2056.png"><div id="alimentoDes">Pan de integral(100g)<br>Proteinas:15.1%<br>Carbohidratos:84.5%<br>Lípídos:0.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaCarbohidratos/image%2057.png"></div></div>
                </section>
            </section>
            `;
            let imgBuscar = document.querySelector("#imgBuscar")

        function recogerValor(){
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
        }imgBuscar.addEventListener("click", recogerValor)
        }
        btCarbohidratos.addEventListener('click', contenidoCarbohidratos)


/****************************************************************************************/

        function contenidoLípidos(){
            body.setAttribute("class","fondoBodyLipidos")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
        <section>
            
            <div class="buscadorTodo" id="buscadorTodo">
                <div id="barraBuscador">
                <input id="barratextoLipi" type="text">
                </div>
                <div id="btbuscar">
                <img id="imgBuscarLipi" class="" src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Vector.png?raw=true">
                </div>
            </div>
            <div id="vistaBuscador"></div>


            <div class="Superior">
            <iframe id="lip" width="560" height="315" src="https://www.youtube.com/embed/7OXP9AhUyYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <section class="contenidoMedidas">
                <div class="informacionLipidos">
                    <h3 class="tituloLipidos">Lípidos</h3>
                    <p class="textoLipidos">Los lípidos son un grupo de moléculas biológicas que comparten dos características: son insolubles en agua y son ricas en energía debido al número de enlaces carbono-hidrógeno.</p>
                    <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Lipidos.png?raw=true">
                    <p class="textoLipidos">Las vitaminas son moléculas orgánicas imprescindibles para los seres vivos en forma de micronutrientes, ya que al ingerirlos en la dieta de forma equilibrada y en dosis esenciales, promueven el correcto funcionamiento fisiológico y del metabolismo.</p>
                </div>
                <div id="grafico" class="grafico">
     
                    <div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%206.png"><div id="alimentoDes">Aceituna(5g)<br>Proteinas:1.4%<br>Carbohidratos:0%<br>Lípídos:20%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%209.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2011.png"><div id="alimentoDes">Aguacate(120g)<br>Proteinas:2%<br>Carbohidratos:10%<br>Lípídos:18%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2012.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2021.png"><div id="alimentoDes">Aceite de coco(10g)<br>Proteinas:0%<br>Carbohidratos:0%<br>Lípídos:10%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2022.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2023.png"><div id="alimentoDes">Mantequilla(30g)<br>Proteinas:0%<br>Carbohidratos:0%<br>Lípídos:24%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2022.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2058.png"><div id="alimentoDes">Margarina de  soya(100g)<br>Proteinas:0%<br>Carbohidratos:0%<br>Lípídos:10%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2059.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2060.png"><div id="alimentoDes">Espinaca(100g)<br>Proteinas:0%<br> Carbohidratos:0%<br>Lípídos:10%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2061.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2062.png"><div id="alimentoDes">perejil(100g)<br>Proteinas:0.1%<br>Carbohidratos:6.4%<br>Lípídos:93.5%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%209.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2064.png"><div id="alimentoDes">Apio(100g)<br>Proteinas:0.8%<br>Carbohidratos:3.4%<br>Lípídos:95.8%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2065.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2066.png"><div id="alimentoDes">Acelgas(100g)<br>Proteinas:0.3%<br>Carbohidratos:10.3%<br>Lípídos:89.4%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2067.png"></div><div class="alimentoAli"><div id="alimento"><img id="alimentoImg" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Lipidos/image%2068.png"><div id="alimentoDes">Brócoli(100g)<br>Proteinas:0.8%<br>Carbohidratos:5.1%<br>Lípídos:94.1%</div></div><img id="alimentoGrafico" src="https://raw.githubusercontent.com/RodrigoVidalGuzmanDiaz/IMAGES/main/Imagenes/img/Graficas/graficaLipidos/image%2069.png"></div></div> 
            </section>
        </section>
            `;
            
            let imgBuscarLipi = document.querySelector("#imgBuscarLipi")
            function recogerValor(){
                let barratextoLipi = document.getElementById("barratextoLipi").value;
            
                let vistaBuscador = document.querySelector("#vistaBuscador")
            
                lipidos.forEach(function(elemento, indice){
                
                
                    if(barratextoLipi == lipidos[indice].name){
                        vistaBuscador.innerHTML = verContenidoLipidos(indice);
                    }else{
                    }
                
                });
            
    let btcierre = document.querySelector("#cierre")
    function cerrar(){
        let vistaBuscador = document.querySelector("#vistaBuscador")
        vistaBuscador.setAttribute("class", "cierreNo")
    }btcierre.addEventListener('click',cerrar)
            
                console.log(barratextoLipi)
            }imgBuscarLipi.addEventListener("click", recogerValor)
        }
        btLípidos.addEventListener('click', contenidoLípidos)

        function contenidoVitaminas(){
            body.setAttribute("class","body")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
            <div id="contenidoVista" class="contenido">
        <section id="estadistica"><section id="contenido">
   

        <div>
            <div id="alineacion">
                <div id="posicion">
                    <div id="cajaVerde">
                        Se recomienda reducir la ingesta de grasas saturadas por las poliinsaturadas y las monoinsaturadas que están presentes en el pescado y en los vegetales.
                    </div>
                </div>
            </div>
        </div>
        <div id="plato"><img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Plato2.png?raw=true"></div>
        <div id="alineacion2"> 
            <div id="cajaNaranja"> Las grasas no deben superar el 30% de las calorias totales ingeridas. Las proteinas deben de suponer el 15% restante en la dieta. Aunque parece fácil de seguir, la dieta de las sociedades más desarrolladas no cumplen estas proporciones y el aporte de grasas y proteínas es mucho mayor de lo que debiera.</div>
            <div id="cajaVesh">Los hidratos de carbono deben aportar al menos un 55-60% del aporte calórico total.</div>  </div>
      
    </section>
    <div id="titulo">Estadística</div></section>
        <section id="piramide"><div id="contenedorDos">
<h1 id="tiPi">Pirámide alimenticia</h1>
<div id="alineacionPi">
<img id="pira" src="https://github.com/jrlopez185/imagenes-suvir/blob/main/Piramide.png?raw=true">
<p id="paV">En nutrición, la pirámide alimenticia es una <br>referencia a la proporción que nuestro cuerpo<br> necesita para mantener una dieta sana y <br>balanceada.Se recomienda la ingesta diaria de <br>55% de carbohidratos,30% de grasas y 15% de<br>proteínas,vitaminas,minerales y fibras</p>
</div>
</div>
</section>
    </div>
            
            `;
        }
        btVitaminas.addEventListener('click', contenidoVitaminas)
}
