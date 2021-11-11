(function () {
  console.log("Funciona");
  // Formatear precio
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const housesContainer = document.getElementById("houses-container");

  fetch("https://api-vasquez.herokuapp.com/api/articulos/categoria/FERRETERIA");
  fetch("/api/casas")
    .then((response) => response.json())
    .then(({ data }) => {
      console.log(data);
      data
        .map(
          ({
            address,
            age,
            bathrooms,
            bottomMeasurement,
            constructionSize,
            description,
            frontMeasurement,
            levelsConstructed,
            location,
            mainPhotography,
            morePictures,
            parking,
            preservation,
            price,
            rooms,
            services,
            subdivision,
            terrainSize,
            title,
            typeOfProperty,
            typeOfTransaction,
            _id,
          }) =>
            (housesContainer.innerHTML = `
              <div class="house">
                <img src="${mainPhotography.url}" alt="Fotografía de ${title}">
                <p class="title">${title}</p>
                <p class="price">$${formatter.format(price)}</p>
                <p class="address">${address}</p>
              </div>
            `)
        )
        .join("");
    });
})();

// address: "1023 N Joels Pl, Los Angeles, Los Angeles County, CA 90012"
// age: "5"
// bathrooms: "3"
// bottomMeasurement: "17"
// constructionSize: "190"
// description: "Bienvenido a Hilltop Homes at Echo Point, una colección de nuevas residencias unifamiliares con amplias vistas de DTLA y las espectaculares montañas de la ciudad. Situado en una comunidad cerrada en la cima de la ladera por encima de Elysian Park, estas casas cuidadosamente diseñadas ofrecen a los residentes un oasis aislado aparte del ajetreo y el bullicio, al tiempo que proporciona la proximidad inmediata a LAs mejores servicios urbanos. Equipado con características de casa inteligente, acabados de diseño personalizados y electrodomésticos de acero inoxidable de bajo consumo, Echo Point representa lo mejor de la vida de lujo, llave en mano. Perfecto para el trabajo a distancia, el entretenimiento y la vida cotidiana, cada casa espaciosa cuenta con planos de planta flexibles, abundantes cubiertas y patios, suelos de superficie dura en todo, y grandes ventanales inundados de luz natural. Equipadas con garajes para 2 coches, adyacentes a una plétora de actividades urbanas y al aire libre, y parte de una vibrante comunidad local, las Casas Hilltop en Echo Point son los mejores retiros privados para llamar a casa. Ubicadas cerca de las autopistas 101, 110 y 5, así como del estadio de los Dodgers, el Staples Center, el Grand Central Market, Silver Lake, China Town, el Distrito de las Artes, los restaurantes y tiendas de moda y mucho más. Bajo HOA con fuerte potencial de flujo de efectivo para las oportunidades de alquiler"
// frontMeasurement: "13"
// levelsConstructed: "3"
// location: {lat: '34.069818', lng: '-118.246046'}
// mainPhotography: {url: 'http://res.cloudinary.com/duibtuerj/image/upload/v…z-inmobiliaria/nwm_large_xkbpid_hj8lmc_jkn7wy.jpg', width: 420, height: 276, public_id: 'vasquez-inmobiliaria/nwm_large_xkbpid_hj8lmc_jkn7wy'}
// morePictures: (3) [{…}, {…}, {…}]
// parking: "2"
// preservation: "Muy bueno"
// price: "29411288"
// rooms: "5"
// services: (3) ['Terraza', 'Cocina Integral', 'Closets']
// subdivision: "La Molienda"
// terrainSize: "220"
// title: "Joels Pl"
// typeOfProperty: "casa"
// typeOfTransaction: "Venta"
// _id: "61687ef56f3e4d33540dfb3a"
