import fetchData from "./fetchData.js";

const people = [
  "/images/people/star-wars-luke-skywalker.jpg",
  "/images/people/star-wars-c3po.jpeg",
  "/images/people/star-wars-r2d2.jpg",
  "/images/people/star-wars-darth-vader.jpg",
  "/images/people/star-wars-leia-organa.jpg",
  "/images/people/star-wars-owen-lars.jpg",
  "/images/people/star-wars-beru-whitesun-lars.jpg",
  "/images/people/star-wars-r5d4.jpeg",
  "/images/people/star-wars-biggs-darklighter.jpg",
  "/images/people/star-wars-obi-wan-kenobi.png",
];

const renderPeople = (data) => {
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

    cardImage.src = people[i];

    card.classList.add("card");
    cardImageContainer.classList.add("card__image-container");
    cardImage.classList.add("card__image");
    cardList.classList.add("card__list");

    // Card content
    const peopleName = createListElement("Character:", data.name);
    const peopleGender = createListElement("Gender:", data.gender);
    const peopleHeight = createListElement("Height:", data.height);
    const peopleHairColor = createListElement("Hair Color:", data.hair_color);
    const peopleEyeColor = createListElement("Eye Color:", data.eye_color);
    const peopleBirthYear = createListElement("Birth Year:", data.birth_year);

    // Appending list elements
    cardList.append(
      peopleName,
      peopleGender,
      peopleHeight,
      peopleHairColor,
      peopleEyeColor,
      peopleBirthYear
    );
  });
};

export default renderPeople;
