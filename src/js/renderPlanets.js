import fetchData from "./fetchData.js";

const planets = [
  "../src/assets/images/planets/star-wars-tatooine.jpg",
  "../src/assets/images/planets/star-wars-alderaan.jpg",
  "../src/assets/images/planets/star-wars-yavin-iv.jpg",
  "../src/assets/images/planets/star-wars-hoth.jpg",
  "../src/assets/images/planets/star-wars-dagobah.jpg",
  "../src/assets/images/planets/star-wars-bespin.jpg",
  "../src/assets/images/planets/star-wars-endor.jpg",
  "../src/assets/images/planets/star-wars-naboo.jpg",
  "../src/assets/images/planets/star-wars-coruscant.jpg",
  "../src/assets/images/planets/star-wars-kamino.jpg",
];

const renderPlanets = (data) => {
  console.log(data);

  //
  const cardContainer = document.querySelector(".card-container");

  // Clear card container
  cardContainer.innerHTML = "";

  // Create list element
  const createListElement = (title, content) => {
    const listElement = document.createElement("li");
    const listElementTitle = document.createElement("h3");
    const listElementContent = document.createElement("p");

    listElement.append(listElementTitle, listElementContent);
    listElementTitle.textContent = title;
    listElementContent.textContent = content;

    listElement.classList.add("card__list-element");
    listElementTitle.classList.add("card__list-element-title");
    listElementContent.classList.add("card__list-element-content");

    return listElement;
  };

  for (let i = 0; i < data.results.length; i++) {
    const card = document.createElement("div");
    const cardImageContainer = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardList = document.createElement("ul");

    cardContainer.append(card);
    card.append(cardImageContainer, cardList);
    cardImageContainer.append(cardImage);

    cardImage.src = planets[i];

    card.classList.add("card");
    cardImageContainer.classList.add("card__image-square-container");
    cardImage.classList.add("card__image");
    cardList.classList.add("card__list");

    // Card content
    const planetsName = createListElement("Planet:", data.results[i].name);
    const planetsDiameter = createListElement(
      "Diameter:",
      data.results[i].diameter
    );
    const planetsTerrain = createListElement(
      "Terrain:",
      data.results[i].terrain
    );
    const planetsGravity = createListElement(
      "Gravity:",
      data.results[i].gravity
    );
    const planetsPopulation = createListElement(
      "Population:",
      data.results[i].population
    );
    const planetsOrbitalPeriod = createListElement(
      "Orbital Period:",
      data.results[i].orbital_period
    );

    // Appending list elements
    cardList.append(
      planetsName,
      planetsDiameter,
      planetsTerrain,
      planetsGravity,
      planetsPopulation,
      planetsOrbitalPeriod
    );

    console.log(cardList);
  }
};

export default renderPlanets;
