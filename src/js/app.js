import fetchData from "./fetchData";

const moviesButton = document.querySelector(".list-element__button-movies");
const peopleButton = document.querySelector(".list-element__button-people");
const planetsButton = document.querySelector(".list-element__button-planets");
const vehiclesButton = document.querySelector(".list-element__button-vehicles");

console.log(moviesButton);

// Remove active class
const removeClass = () => {
  document
    .querySelectorAll(".list-element__button--active")
    .forEach((element) => {
      element.classList.remove("list-element__button--active");
    });
};

// Event Listeners
moviesButton.addEventListener("click", () => {
  removeClass();
  // renderMovies("films");
  moviesButton.classList.add("list-element__button--active");
});

peopleButton.addEventListener("click", () => {
  removeClass();
  // renderPeople("people");
  peopleButton.classList.add("list-element__button--active");
});

planetsButton.addEventListener("click", () => {
  removeClass();
  // renderButton("planets");
  planetsButton.classList.add("list-element__button--active");
});

vehiclesButton.addEventListener("click", () => {
  removeClass();
  // renderVehicles("vehicles");
  vehiclesButton.classList.add("list-element__button--active");
});
