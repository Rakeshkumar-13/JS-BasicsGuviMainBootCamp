// Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Get all countries from Asia continent using Filter function
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log("Countries from Asia continent:", asiaCountries);

    // Get all countries with a population of less than 2 lakhs using Filter function
    const lessThan2LakhPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", lessThan2LakhPopulation);

    // Print name, capital, and flag of each country using forEach function
    data.forEach(country => {
      console.log("Name:", country.name.common, ", Capital:", country.capital[0], ", Flag:", country.flags.svg);
    });

    // Print total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => {
      const currencies = Object.values(country.currencies);
      return currencies.includes("USD");
    });
    console.log("Country that uses US dollars:", countryWithUSD);
  })
  .catch(error => console.error("Error fetching data:", error));
