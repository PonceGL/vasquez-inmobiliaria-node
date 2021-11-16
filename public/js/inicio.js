(function () {
  // Formatear precio
  const formatter = new Intl.NumberFormat("es-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const housesContainer = document.getElementById("houses-container");
  const weContainer = document.getElementById("we-items-container");
  const subdivisionsSelect = document.getElementById("subdivisions-select");

  window
    .fetch("/api/casas")
    .then((response) => response.json())
    .then(({ data }) => {
      const housesList = [];

      data.forEach(({ address, mainPhotography, price, title }) => {
        // Crea el contenedor
        const conatiner = document.createElement("div");
        conatiner.className = "house";
        // Crea el contenedor de la imagen
        const conatinerImage = document.createElement("div");
        conatinerImage.className = "image-conatiner";
        // Crea la imagen
        const imageItem = document.createElement("img");
        imageItem.src = `${mainPhotography.url}`;
        imageItem.alt = `Fotografía de ${title}`;
        //Agrega la imagen a su contenedor
        conatinerImage.append(imageItem);
        // Crea el contenedor de el titulo y el precio
        const conatinerTitleAndPrice = document.createElement("div");
        conatinerTitleAndPrice.className = "title-and-price-conatiner";
        // Crea el titulo
        const titleItem = document.createElement("h3");
        titleItem.textContent = title;
        titleItem.className = "title";
        //Agrega el titulo a su contenedor
        conatinerTitleAndPrice.append(titleItem);
        // Crea el precio
        const priceItem = document.createElement("p");
        priceItem.textContent = `$${formatter.format(price)} MXN`;
        priceItem.className = "price";
        //Agrega el precio a su contenedor
        conatinerTitleAndPrice.append(priceItem);
        // Crea el dirección
        const addressItem = document.createElement("p");
        addressItem.textContent = address;
        addressItem.className = "address";
        // Agrega los elementos al contenedor
        conatiner.append(conatinerImage, conatinerTitleAndPrice, addressItem);
        // Agrega los items al array
        housesList.push(conatiner);
      });

      housesContainer.append(...housesList);
    })
    .catch((err) => console.error(err));

  // Porqué confiar en nosotros

  const reasons = [
    {
      icon: "",
      title: "Liderazgo",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "",
      title: "Experiencia",
      text: "Lorem ipsum dolor sit amet  Aenean vulputate eleifend",
    },
    {
      icon: "",
      title: "Servicio Excelente",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "",
      title: "Precio Justo",
      text: "Lorem ipsum dolor sit amet  Aenean vulputate eleifend",
    },
  ];

  reasons
    .map(
      ({ icon, title, text }) =>
        (weContainer.innerHTML += `
        <div class="item">
          <div class="icon-container">${icon}</div>
          <h4 class="title">${title}</h4>
          <p class="text">${text}</p>
        </div>
    `)
    )
    .join("");

  // Lista de Facrionamientos

  window
    .fetch("/api/fraccionamientos")
    .then((response) => response.json())
    .then(({ data }) => {
      data
        .map(
          ({ name }) =>
            (subdivisionsSelect.innerHTML += `
        <option value="${name}">${name}</option>
    `)
        )
        .join("");
    })
    .catch((err) => console.error(err));
})();
