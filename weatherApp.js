let input = document.getElementById("city");
let button = document.getElementById("btn");
let div = document.getElementById("output");

let key = `92088f5f0a10178681a91d1cbabf2b4a`;

button.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);

        // Convert temperature from Kelvin to Celsius
        let tempInCelsius = data.main.temp - 273.15;

        div.innerHTML = `City Name: ${data.name} <br> Temperature: ${tempInCelsius.toFixed(2)} °C`;
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
        div.innerHTML = "Error fetching weather data. Please try again.";
    });
});
