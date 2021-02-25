const weather = document.querySelector(".js-weather")
const COORDS = 'coords';
const API_KEY="use your key";
// `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`


function geoWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const name = json.name;
        weather.innerText=`${name} / ${temp}`;
    })
}
function saveGeo(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function geoSuccess(position){
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj={
        lat,
        lon
    }
    saveGeo(coordsObj);
}

function geoFailed(){
    console.log("getting geo failed");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFailed);
}
function loadCoords(){
    const currentCoords = localStorage.getItem(COORDS);
    if(currentCoords===null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(currentCoords);
        geoWeather(parseCoords.lat, parseCoords.lon);
    }
}



function init(){
    loadCoords();
}


init();