let response = "https://apipetshop.herokuapp.com/api/articulos";
let data = [];
let tipoData = [];
let juguetes = "";
let datoJuguete = [];

async function getData() {
          await fetch(response)
                    .then((respuesta) => respuesta.json())
                    .then((json) => {
                              data = json.response;

                              console.table(data);

                              tipoData = data.map((t) => t.tipo);
                              const unica = new Set(tipoData);
                              let datosUnicos = [...unica];

                              console.log(datosUnicos);

                              juguetes = datosUnicos[0];

                              data.forEach((dato) => {
                                        if (dato.tipo == juguetes) {
                                                  datoJuguete.push(dato);
                                        }
                              });
                              console.log(juguetes);
                              console.log(datoJuguete);
                              displayCard(datoJuguete);
                    });

          function displayCard(datoJuguete) {
                    let toDisplay = datoJuguete;
                    console.log(toDisplay);

                    let html = "";
                    toDisplay.forEach((toDisplay) => {
                              let stock =
                                        toDisplay.stock <= 5
                                                  ? `<p class="text-danger fw-bold">"Ultimas Unidades!"</p>`
                                                  : "";

                              html += `
    
        <div class="card">
          <div class="cover">
            <img src="${toDisplay.imagen}" alt="">
            
        </div>
        <div class="description">
            <h2>${toDisplay.nombre}</h2>
            <p>Descripción: ${toDisplay.descripcion}</p>
            <p>Precio:$${toDisplay.precio}</p>
            <p>STOCK:${toDisplay.stock}</p>
            ${stock}
          
          </div>
        </div>
    
       
    
        `;
                    });

                    document.getElementById("mainCards").innerHTML = html;
          }
}
getData();
displayCard();
