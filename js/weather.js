
const API_KEY = "0a4a2921b0752f76a6391a4edd8d2e10"

function onGeoOK(position){
const lat = position.coords.latitude;
const log = position.coords.longitude;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
fetch(url)
.then(response => response.json())
.then(data => {
    const weather = document.querySelector("#weather span:last-child");
    const  city= document.querySelector("#weather span:first-child");
    city.innerText = `Location: ${data.name},`;
    weather.innerText = `Weather: ${data.weather[0].main} / ${data.main.temp} °C`;
});
}
function onGeoError(){
    alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);