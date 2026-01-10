
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherResult = document.getElementById('weather-result');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            weatherResult.innerHTML = 'City not found';
        }
    } catch (error) {
        weatherResult.innerHTML = 'Error fetching weather data';
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}
