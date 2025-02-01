const fetchData = async (category) => {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/${category}/`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Could not fetch data", error);
    return;
  }
};

export default fetchData;
