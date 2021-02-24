const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
gretting = document.querySelector("js-grettings");

const user = "currntUser",
showing_cn = "shwoing";


function paintGretting(test){
    form.classList.remove(showing_cn);
    gretting.classList.add(showing_cn);
    gretting.innerText(`hello ${text}`);
}


function loadName(){
    const userName = localStorage.getItem(user);
    if(userName ==null){
        //
    }
    else{
        paintGretting(userName);
    }
}


function init(){
    loadName();
}

init()