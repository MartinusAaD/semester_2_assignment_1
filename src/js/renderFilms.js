import fetchData from "./fetchData.js";

const films = [
  "../src/assets/images/films/star-wars-a-new-hope.jpg",
  "../src/assets/images/films/star-wars-the-empire-strikes-back.jpg",
  "../src/assets/images/films/star-wars-return-of-the-jedi.jpg",
  "../src/assets/images/films/star-wars-the-phantom-menace.jpg",
  "../src/assets/images/films/star-wars-attack-of-the-clones.jpg",
  "../src/assets/images/films/star-wars-revenge-of-the-sith.jpg",
  "../src/assets/images/films/star-wars-the-force-awakens.jpg",
];

const renderFilms = (data) => {
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

    cardImage.src = films[i];

    card.classList.add("card");
    cardImageContainer.classList.add("card__image-container");
    cardImage.classList.add("card__image");
    cardList.classList.add("card__list");

    // Card content
    const filmTitle = createListElement("Film title:", data.results[i].title);
    const filmEpisode = createListElement(
      "Film episode:",
      data.results[i].episode_id
    );
    const filmReleaseDate = createListElement(
      "Release Date:",
      data.results[i].release_date
    );
    const filmDirector = createListElement(
      "Film director:",
      data.results[i].director
    );
    const filmProducers = createListElement(
      "Film producers:",
      data.results[i].producer
    );

    // Appending list elements
    cardList.append(
      filmTitle,
      filmEpisode,
      filmReleaseDate,
      filmDirector,
      filmProducers
    );

    console.log(cardList);
  }
};

export default renderFilms;
