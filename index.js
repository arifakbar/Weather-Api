const api = {
    key: "4ef851b4916bacc33a51fcf307226be8",
    base: "https://api.openweathermap.org/data/2.5/"
}
const searchCity = document.querySelector('#searchCity');
const cityName = document.querySelector('#cityName');
const country = document.querySelector('#country');
const temprature = document.querySelector('#temprature');
const weatherType = document.querySelector('#weatherType');
const minTemp = document.querySelector('#minTemp');
const maxTemp = document.querySelector('#maxTemp');
const currentDate = document.querySelector('#currentDate');

searchCity.addEventListener('keypress', function (event) {
    if (searchCity.value != '') {
        if (event.keyCode == 13) {  // keycode 13 id enter
            getResults(searchCity.value);
            console.log(searchCity.value);
        };
    }
});
function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
};
window.onload;
const date = new Date();
const todayDate = date.getDate();
const todayMonth = date.getMonth();
const fullYear = date.getFullYear();
const celcius = 10;
const fahrenhite = 10;

function displayResults(weather) {
    console.log(weather);
    cityName.textContent = weather.name;
    country.textContent = weather.sys.country;
    temprature.textContent = Math.ceil(weather.main.temp) + `° C`;
    fahrenhite = (celcius * 9 / 5) + 32;
    celcius = parseInt(temprature.textContent);
    minTemp.textContent = Math.floor(weather.main.temp_min) + `° C`;
    maxTemp.textContent = Math.ceil(weather.main.temp_max) + `° C`;
    weatherType.textContent = weather.weather[0].main;
    currentDate.textContent = `${todayDate} / ${todayMonth + 1} / ${fullYear} `;
    searchCity.value = '';
};
// var lol = true;

// temprature.addEventListener('click', function () {
    
//     if (lol === true) {
//         temprature.textContent = fahrenhite + `° F`;
//         lol = false;
//     }
//     else if(lol === false){
//         temprature.textContent = celcius + `° C`;
//         lol = true;
//     } 
// });