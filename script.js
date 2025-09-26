// API Key (replace with your own key)
const apiKey = "4fc3a83f580a98566fcc0500e2c47c3c";
const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// Function to get weather
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert("City not found!");
      return;
    }
    const data = await response.json();

    // Display data
    cityName.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `🌡 Temperature: ${data.main.temp}°C`;
    description.innerText = `📖 Condition: ${data.weather[0].description}`;
    humidity.innerText = `💧 Humidity: ${data.main.humidity}%`;
    wind.innerText = `🌬 Wind Speed: ${data.wind.speed} m/s`;

    // Weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png` ;

    weatherCard.style.display = "block";
  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
    
}
