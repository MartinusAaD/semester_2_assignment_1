import renderFilms from "./renderFilms.js";
import renderPeople from "./renderPeople.js";
import renderPlanets from "./renderPlanets.js";
import renderVehicles from "./renderVehicles.js";

const fetchData = async (category) => {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/${category}/`);
    const data = await response.json();

    // Send data based on category
    switch (category) {
      case "films":
        console.log("Films Rendered");
        renderFilms(data);

        break;

      case "people":
        renderPeople(data);
        console.log("People Rendered");
        break;

      case "planets":
        renderPlanets(data);
        console.log("Planets Rendered");
        break;

      case "vehicles":
        renderVehicles(data);
        console.log("Vehicles Rendered");
        break;

      default:
        console.log("categoryData unknown");
        break;
    }
    return data;
  } catch (error) {
    console.log("Could not fetch data", error);
    return;
  }
};

export default fetchData;
