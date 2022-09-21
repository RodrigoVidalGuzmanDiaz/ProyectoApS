


export function vistaDelContenido(){

 let contenidoVista = document.getElementById('contenidoVista')
 let imgLogo = document.querySelector('.imgLogo')
 let btProteinas =  document.getElementById('btProteinas');
 let btCarbohidratos =  document.querySelector('#btCarbohidratos');
 let btLípidos =  document.querySelector('#btLípidos');
 let btVitaminas =  document.querySelector('#btVitaminas');

        function contenidoHomePage(){
            contenidoVista.innerHTML= `
            <section id="estadistica"></section>
            <section id="piramide"></section>
            `;

        }
        imgLogo.addEventListener('click', contenidoHomePage);

        function contenidoProteina(){
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
            <div id="cds">
            <div id="cdsPe">
                <iframe id="vide"   src="https://www.youtube.com/embed/RPeyUToLKiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!--<div id="ims"></div>-->
            </div>
    
            <div id="cus">
                <div id="cusDos">
                    <div id="cusTres">
                        <p id="pss">Las proteínas son moléculas grandes y complejas que desempeñan muchas funciones críticas en el cuerpo. Realizan la mayor parte del trabajo en las células y son necesarias para la estructura, función y regulación de los tejidos y órganos del cuerpo.</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div id="cdsDos">
            <div id="yy">
                <div id="yyDos">
                   <div id="nn">
                    <div id="fus">
                        <div id="temFus">
                            <p id="tet">Fuentes</p>
                        </div>
                    </div>
    
                    <div id="temConte">
                        <p id="gg">-Lomo embuchado<br>
                            -Soja<br>
                            -Queso manchego curado<br>
                            -Bacalao<br>
                            -Jamón cerrano<br>
                            -Queso de bola<br>
                            -Cacahuates <br>
                            -Queso fresco <br>
                            -Salchichón, salami <br>
                            -Atún<br>
                            -Lentejas <br>
                            -Queso Roquefort<br> 
                            -Sardinas en conserva <br>
                            -Chorizo<br>
                            -Queso de cabrales<br>
                            -Higado <br>
                            -Langostinos <br>
                            -Almendras <br>
                            -Carne magra de cerdo<br> 
                            -Morcilla<br>
                            -Garbanzos<br>
                            -Cabrito <br>
                            -Salmón <br>
                            -Cordero<br> 
                            -Pistachos<br>
                            -Lenguado <br>
                            -Carne semigrasa de cerdo <br>
                            -Merluza</p>
                    </div>
    
                   </div>
    
                    <div id="dd">
                        <div id="rrTeam">
                            <p id="tet">Cantidad</p> 
                        </div>
                        <div id="ll">
                            <p id="h">
                                -50.0
                                -33.7
                            -32<br>
                            -31.5<br>
                            -30.5<br>
                            -29.0<br>
                            -27.0<br>
                            -26.0<br>
                            -25.8<br>
                            -24.3<br>
                            -24.0<br>
                            -23.0<br>
                            -22.0<br>
                            -22.0<br>
                            -21.0<br>
                            -20.7<br>
                            -20.5<br>
                            -20.1<br>
                            -20.0<br>
                            -20.0<br>
                            -19.5<br>
                            -19.0<br>
                            -19.0<br>
                            -19.0<br>
                            -18.0<br>
                            -17.6<br>
                            -16.7<br>
                            -16.5<br>
                            -15.9
                            </p>
                        </div>
    
                    </div>
                </div>
                
            </div>
        </div> 
            `;
        }
        btProteinas.addEventListener('click', contenidoProteina);

        function contenidoCarbohidratos(){
            contenidoVista.innerHTML= `

            `;
        }
        btCarbohidratos.addEventListener('click', contenidoCarbohidratos)

        function contenidoLípidos(){
            contenidoVista.innerHTML= `

            `;
        }
        btLípidos.addEventListener('click', contenidoLípidos)

        function contenidoVitaminas(){
            contenidoVista.innerHTML= `

            `;
        }
        btVitaminas.addEventListener('click', contenidoVitaminas)
}