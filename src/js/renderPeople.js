import fetchData from "./fetchData.js";

const people = [
  "../src/assets/images/people/star-wars-luke-skywalker.jpg",
  "../src/assets/images/people/star-wars-c3po.jpeg",
  "../src/assets/images/people/star-wars-r2d2.jpg",
  "../src/assets/images/people/star-wars-darth-vader.jpg",
  "../src/assets/images/people/star-wars-leia-organa.jpg",
  "../src/assets/images/people/star-wars-owen-lars.jpg",
  "../src/assets/images/people/star-wars-beru-whitesun-lars.jpg",
  "../src/assets/images/people/star-wars-r5d4.jpeg",
  "../src/assets/images/people/star-wars-biggs-darklighter.jpg",
  "../src/assets/images/people/star-wars-obi-wan-kenobi.png",
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

  for (let i = 0; i < data.results.length; i++) {
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
    const peopleName = createListElement("Character:", data.results[i].name);
    const peopleGender = createListElement("Gender:", data.results[i].gender);
    const peopleHeight = createListElement("Height:", data.results[i].height);
    const peopleHairColor = createListElement(
      "Hair Color:",
      data.results[i].hair_color
    );
    const peopleEyeColor = createListElement(
      "Eye Color:",
      data.results[i].eye_color
    );
    const peopleBirthYear = createListElement(
      "Birth Year:",
      data.results[i].birth_year
    );

    // Appending list elements
    cardList.append(
      peopleName,
      peopleGender,
      peopleHeight,
      peopleHairColor,
      peopleEyeColor,
      peopleBirthYear
    );

    console.log(cardList);
  }
};

export default renderPeople;
