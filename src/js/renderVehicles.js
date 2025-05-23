import fetchData from "./fetchData.js";

const vehicles = [
  "/images/vehicles/star-wars-sandcrawler.jpeg",
  "/images/vehicles/star-wars-skyhopper.jpg",
  "/images/vehicles/star-wars-landspeeder.jpg",
  "/images/vehicles/star-wars-starfighter.jpg",
  "/images/vehicles/star-wars-snowspeeder.jpeg",
  "/images/vehicles/star-wars-tie-bomber.jpg",
  "/images/vehicles/star-wars-at-at.jpg",
  "/images/vehicles/star-wars-at-st.jpeg",
  "/images/vehicles/star-wars-storm-iv-twin-pod-cloud-car.jpg",
  "/images/vehicles/star-wars-sail-barge.jpg",
];

const renderVehicles = (data) => {
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

    cardImage.src = vehicles[i];

    card.classList.add("card");
    cardImageContainer.classList.add("card__image-square-container");
    cardImage.classList.add("card__image-square");
    cardList.classList.add("card__list");

    // Card content
    const vehiclesName = createListElement("Planet:", data.name);
    const vehiclesModel = createListElement("Model:", data.model);
    const vehiclesLength = createListElement(
      "Length:",
      `${data.length} meters`
    );
    const vehiclesCargoCapacity = createListElement(
      "Cargo Capacity:",
      data.cargo_capacity
    );
    const vehiclesManufacturer = createListElement(
      "Manufacturer:",
      data.manufacturer
    );
    const vehiclesPassengers = createListElement(
      "Passengers:",
      data.passengers
    );

    // Appending list elements
    cardList.append(
      vehiclesName,
      vehiclesModel,
      vehiclesManufacturer,
      vehiclesLength,
      vehiclesCargoCapacity,
      vehiclesPassengers
    );
  });
};

export default renderVehicles;
