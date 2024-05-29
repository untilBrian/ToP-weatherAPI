//key = 1054775268a34e829ae162057242905

//non-API 
const button = document.querySelector("button");
const input = document.querySelector ("input");

button.addEventListener("click", async function() {
    const loc = getLocation(input.value); 
    const weather = await fetchWeather(loc);
    displayWeather(weather);
})

function getLocation(input) {
    return location; 
}

function displayWeather(weather) {
    const weatherDiv = document.createElement("div");
    weatherDiv.textContent = "Here is the weather in " + input.value + ": " + weather + "°F";
    document.body.appendChild(weatherDiv);
}

//API functions
async function fetchWeather(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1054775268a34e829ae162057242905&q=${location}`, {
        mode: "cors"
    })
    const data = await response.json();
    return data.current.temp_f;
}

