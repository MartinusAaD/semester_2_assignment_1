try {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`
  );
  // Fetches all the information about the country and creates an array
  const data = await response.json();
  // Creates a value based on the first index of data
  const [country] = data;
  //
  renderCountry(country);
  // Clears input upon search
  searchInput.value = "";
  console.log(country);
  errorMessage.textContent = "";}

//
const renderCountry = (country) => {
  const countryCard = document.querySelector(".country-card");
  const countryList = document.querySelector(".country-card__list");

  const countryFlagContainer = document.createElement("div");
  const countryFlag = document.createElement("img");
  const countryImageContainer = document.querySelector(".country-card__image");

  countryList.innerHTML = "";
  countryImageContainer.style.display = "none";
  countryCard.style.display = "flex";

  const createListItem = (title, content) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    item.append(itemTitle, itemContent);
    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.classList.add("country-card__list-item");
    itemTitle.classList.add("country-card__list-title");
    itemContent.classList.add("country-card__list-content");

    return item;
  };
  const countryName = createListItem("Country Name:", country.name.common);
  const countryContinent = createListItem("Contintent:", country.continents[0]);
  const countryCapital = createListItem("Capital:", country.capital[0]);
  const countryPopulation = createListItem("Population:", country.population);

  const extractedLanguages = Object.values(country.languages).toString();
  const countryLanguages = createListItem("Language:", extractedLanguages);

  const currencyToArray = Object.entries(country.currencies);
  const countryCurrency = createListItem("Currency:", currencyToArray[0][0]);

  const countryTimeZone = createListItem("Time Zone:", country.timezones[0]);

  const capitalizeWeekday =
    country.startOfWeek.slice(0, 1).toUpperCase() +
    country.startOfWeek.slice(1);
  const countryWeekday = createListItem(
    "Start of the week:",
    capitalizeWeekday
  );

  const countryDrivingSide = createListItem("Driving Side:", country.car.side);

  countryFlag.src = country.flags.png;

  // Append List Items

  countryList.append(
    countryFlagContainer,
    countryName,
    countryContinent,
    countryCapital,
    countryPopulation,
    countryLanguages,
    countryCurrency,
    countryTimeZone,
    countryWeekday,
    countryDrivingSide
  );

  countryFlagContainer.append(countryFlag);
  countryFlag.classList.add("country-card__flag-container");
};

export default renderCountry;
