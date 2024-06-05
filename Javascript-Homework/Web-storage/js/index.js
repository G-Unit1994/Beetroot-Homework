const API_KEY = '47307d49c32eb7135bebc7d6b6b5cfd0';
const CITY = 'Odesa';
const WEATHER_URL = `https://api.openweathermap.org/data/3.0/weather?q=Odesa&appid=YOUR_API_KEY&units=metric`;
const STORAGE_KEY = 'weatherData';
const EXPIRATION_TIME = 2 * 60 * 60 * 1000;

function fetchWeather() {
    fetch(WEATHER_URL)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp,
                description: data.weather[0].description,
                timestamp: new Date().getTime()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(weatherData));
                    displayWeather(weatherData);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    displayWeather(null, true);
                });
}

function displayWeather(data, error = false) {
    const weatherDiv = document.getElementById('weather');
    if (error) {
        weatherDiv.textContent = 'Не вдалося отримати прогноз погоди. Перевірте ваше з’єднання з Інтернетом.';
        return;
    }
    if (data) {
        weatherDiv.textContent = `Температура в ${CITY}: ${data.temperature}°C, ${data.description}`;
    } else {
        weatherDiv.textContent = 'Немає даних про погоду.';
    }
}

function getWeather() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const currentTime = new Date().getTime();

    if (savedData && currentTime - savedData.timestamp < EXPIRATION_TIME) {
        displayWeather(savedData);
    } else {
        fetchWeather();
    }
}
getWeather();
