// Error Message

const errorMessage = document.createElement("p");
const container = document.querySelector(".card-container");

const renderError = () => {
  container.innerHTML = "";
  container.append(errorMessage);
  errorMessage.textContent = "Error fetching the data, try again later!";
};

export default renderError;
