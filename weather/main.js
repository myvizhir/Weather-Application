const api = {
    key: "0086c4285d6952ee104e5160ec57a4b4",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    getResults(searchbox.value);
    console.log(searchbox.value);
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML= `${weather.name},${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>deg C</span>`;
    let cloudy = document.querySelector('.current .weather');
    cloudy.innerHTML= `<span>Feels_Like!   </span>${weather.main.feels_like}`;
    let cloud = document.querySelector('.current .weather1');
    cloud.innerHTML= `<span>Wind Speed!   </span>${weather.wind.speed}`;
    let lati = document.querySelector('.current .lati');
    lati.innerHTML= `<span>Latitude!   </span>${weather.coord.lat}`;
    let longi = document.querySelector('.current .longi');
    longi.innerHTML= `<span>Longitude!   </span>${weather.coord.lon}`;
}

function dateBuilder (d){
    let months = ["January", "February", "March", "April","May","June","july",
"August","September","October","November","December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month =months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ,${date} ${month} ${year}`;
}