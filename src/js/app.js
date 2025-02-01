import fetchData from "./fetchData.js";
import renderFilms from "./renderFilms.js";

// Load default category on entering page
document.addEventListener("DOMContentLoaded", fetchData("films"));

// Button selector
const filmsButton = document.querySelector(".list-element__button-films");
const peopleButton = document.querySelector(".list-element__button-people");
const planetsButton = document.querySelector(".list-element__button-planets");
const vehiclesButton = document.querySelector(".list-element__button-vehicles");

// Remove active class
const removeClass = () => {
  document
    .querySelectorAll(".list-element__button--active")
    .forEach((element) => {
      element.classList.remove("list-element__button--active");
    });
};

// Event Listeners
filmsButton.addEventListener("click", () => {
  removeClass();
  fetchData("films");
  filmsButton.classList.add("list-element__button--active");
});

peopleButton.addEventListener("click", () => {
  removeClass();
  fetchData("people");
  peopleButton.classList.add("list-element__button--active");
});

planetsButton.addEventListener("click", () => {
  removeClass();
  fetchData("planets");
  planetsButton.classList.add("list-element__button--active");
});

vehiclesButton.addEventListener("click", () => {
  removeClass();
  fetchData("vehicles");
  vehiclesButton.classList.add("list-element__button--active");
});
