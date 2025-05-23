import fetchData from "./fetchData.js";

const films = [
  "/images/films/star-wars-a-new-hope.jpg",
  "/images/films/star-wars-the-empire-strikes-back.jpg",
  "/images/films/star-wars-return-of-the-jedi.jpg",
  "/images/films/star-wars-the-phantom-menace.jpg",
  "/images/films/star-wars-attack-of-the-clones.jpg",
  "/images/films/star-wars-revenge-of-the-sith.jpg",
  "/images/films/star-wars-the-force-awakens.jpg",
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

  data.results.map((data, i) => {
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
    const filmTitle = createListElement("Film title:", data.title);
    const filmEpisode = createListElement("Film episode:", data.episode_id);
    const filmReleaseDate = createListElement(
      "Release Date:",
      data.release_date
    );
    const filmDirector = createListElement("Film director:", data.director);
    const filmProducers = createListElement("Film producers:", data.producer);

    // Appending list elements
    cardList.append(
      filmTitle,
      filmEpisode,
      filmReleaseDate,
      filmDirector,
      filmProducers
    );
  });
};

export default renderFilms;
