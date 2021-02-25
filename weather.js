const COORDS = 'coords';
const API_KEY="7bbaf8c67195a6a0e888f094535a1cff";
// `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

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
    console.log(coordsObj);
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
    }
}



function init(){
    loadCoords();
}


init();