


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