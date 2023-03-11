const API_KEY = "3808c4de4960b5084547e60af5536397";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const longi = position.coords.longitude;
    console.log("you live in", lat, longi);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
            city.innerText = data.name;
        })
        
        
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
