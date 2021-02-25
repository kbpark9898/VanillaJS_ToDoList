const body = document.querySelector("body")

const IMG_num = 3;


function inputImage(img_number){
    const image = new Image();
    image.src =`images/${img_number+1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function Random_generator(){
    const random_num = Math.floor(Math.random()*IMG_num);
    return random_num;
}
function init(){
    const currnt_num = Random_generator();
    inputImage(currnt_num);
}

init();