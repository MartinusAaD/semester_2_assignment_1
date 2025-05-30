import fetchData from "./fetchData.js";

const planets = [
  "/images/planets/star-wars-tatooine.jpg",
  "/images/planets/star-wars-alderaan.jpg",
  "/images/planets/star-wars-yavin-iv.jpg",
  "/images/planets/star-wars-hoth.jpg",
  "/images/planets/star-wars-dagobah.jpg",
  "/images/planets/star-wars-bespin.jpg",
  "/images/planets/star-wars-endor.jpg",
  "/images/planets/star-wars-naboo.jpg",
  "/images/planets/star-wars-coruscant.jpg",
  "/images/planets/star-wars-kamino.jpg",
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

  data.results.map((data, i) => {
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
    cardImage.classList.add("card__image-square");
    cardList.classList.add("card__list");

    // Card content
    const planetsName = createListElement("Planet:", data.name);
    const planetsDiameter = createListElement(
      "Diameter:",
      `${data.diameter} Kilometers`
    );
    const planetsTerrain = createListElement("Terrain:", data.terrain);
    const planetsGravity = createListElement("Gravity:", data.gravity);
    const planetsPopulation = createListElement("Population:", data.population);
    const planetsOrbitalPeriod = createListElement(
      "Orbital Period:",
      `${data.orbital_period}`
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
  });
};

export default renderPlanets;
