const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
gretting = document.querySelector(".js-gretting");

const user = "currntUser",
showing_cn = "showing";


function paintGretting(text){
    form.classList.remove(showing_cn);
    gretting.classList.add(showing_cn);
    gretting.innerText=`hello ${text}`;
}


function loadName(){
    const userName = localStorage.getItem(user);
    if(userName ==null){
        askForName();
    }
    else{
        paintGretting(userName);
    }
}
function saveName(text){
    localStorage.setItem(user, text);

}
function handleSubminEvent(event){
    event.preventDefault();
    const userName = input.value;
    paintGretting(userName);
    saveName(userName);

}
function askForName(){
    form.classList.add(showing_cn)
    form.addEventListener("submit", handleSubminEvent)

}
function init(){
    loadName();
}

init()