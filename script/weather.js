const API_KEY = "6791a90222a6805e9a38a844ea964456";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log("You live in", lat, lon);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".weather span:first-child");
            const city = document.querySelector(".weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);