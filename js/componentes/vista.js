


export function vistaDelContenido(){

    let body = document.getElementById('body')

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
            body.setAttribute("class","fondoBodyProteinas")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
            <section class= "contenerdorProteinas">
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
                    <div class="grafico">
                        <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Alimentos.png?raw=true">
                    </div>
                </section>
            </section>
            `;
        }
        btProteinas.addEventListener('click', contenidoProteina);

        function contenidoCarbohidratos(){
            body.setAttribute("class","fondoBodyCarbohidratos")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
            <section>
                <div class="Superior">
                <iframe id="cab" width="560" height="315" src="https://www.youtube.com/embed/JUXOKbOmk30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <section class="contenidoMedidas">
                    <div class="informacionProteinas">
                        <h3 class="tituloProteinas">Carbohidratos</h3>
                        <p class="textoProteinas">Los glúcidos, carbohidratos, hidratos de carbono o sacáridos son biomoléculas compuestas principalmente de carbono, hidrógeno y oxígeno, aunque algunos de ellos también contienen otros bioelementos tales como: nitrógeno, azufre y fósforo.</p>
                        <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/carbohidratos.png?raw=true">
                        <p class="textoProteinas">Se llaman hidratos de carbono, ya que a nivel químico contienen carbono, hidrógeno y oxígeno.</p>
                    </div>
                    <div class="grafico">
                        <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Alimentos.png?raw=true">
                    </div>
                </section>
            </section>
            `;
        }
        btCarbohidratos.addEventListener('click', contenidoCarbohidratos)

        function contenidoLípidos(){
            body.setAttribute("class","fondoBodyLipidos")
            contenidoVista.classList.add("contenidoVistaNone")
            contenidoVista.innerHTML= `
        <section>
            <div class="Superior">
            <iframe id="lip" width="560" height="315" src="https://www.youtube.com/embed/7OXP9AhUyYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <section class="contenidoMedidas">
                <div class="informacionProteinas">
                    <h3 class="tituloProteinas">Lípidos</h3>
                    <p class="textoProteinas">Los lípidos son un grupo de moléculas biológicas que comparten dos características: son insolubles en agua y son ricas en energía debido al número de enlaces carbono-hidrógeno.</p>
                    <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Lipidos.png?raw=true">
                    <p class="textoProteinas">Un lípido es un compuesto orgánico molecular no soluble compuesto por hidrógeno y carbono.</p>
                </div>
                <div class="grafico">
                    <img src="https://github.com/RodrigoVidalGuzmanDiaz/IMAGES/blob/main/Alimentos.png?raw=true">
                </div>
            </section>
        </section>
            `;
        }
        btLípidos.addEventListener('click', contenidoLípidos)

        function contenidoVitaminas(){
            contenidoVista.innerHTML= `

            `;
        }
        btVitaminas.addEventListener('click', contenidoVitaminas)
}