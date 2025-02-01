import fetchData from "./fetchData.js";

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
    const cardList = document.createElement("ul");

    cardContainer.append(card);
    card.append(cardList);

    card.classList.add("card");
    cardList.classList.add("card__list");

    // Card content
    const filmTitle = createListElement("Film title:", data.results[i].title);
    const filmDirector = createListElement(
      "Film director:",
      data.results[i].director
    );
    const filmEpisode = createListElement(
      "Film episode:",
      data.results[i].episode_id
    );
    const filmReleaseDate = createListElement(
      "Release Date:",
      data.results[i].release_date
    );

    // Appending list elements
    cardList.append(filmTitle, filmDirector, filmEpisode, filmReleaseDate);

    console.log(cardList);
  }
};

export default renderFilms;
