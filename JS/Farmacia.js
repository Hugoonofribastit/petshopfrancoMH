let response = "https://apipetshop.herokuapp.com/api/articulos";
let data = [];
let tipoData = [];
let farmacos = "";
let datoFarmaco = [];

async function getData() {
          await fetch(response)
                    .then((respuesta) => respuesta.json())
                    .then((json) => {
                              data = json.response;

                              console.table(data);

                              /*    tipoData = data.map(t=>(t.tipo))
        const unica = new Set(tipoData);
        let datosUnicos = [...unica];

        console.log(datosUnicos)

        farmacos = datosUnicos[7]  */

                              data.forEach((dato) => {
                                        if (dato.tipo == "Medicamento") {
                                                  datoFarmaco.push(dato);
                                        }
                              });

                              console.log(datoFarmaco);
                              displayCard(datoFarmaco);
                    });

          function displayCard(datoFarmaco) {
                    let toDisplay = datoFarmaco;

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
            <p>${toDisplay.descripcion}</p>
            <p>${toDisplay.precio}</p>
            <p>${toDisplay.stock}</p>
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
