
const popcat = document.querySelector("#popcat");

const openMouthImg = "open.png";
const closeMouthImg = "close.png";


const openMouthSound = new Audio("open1.mp3");
const closeMouthSound = new Audio("close1.mp3");


popcat.addEventListener("mouseenter", openMouth);
popcat.addEventListener("mouseleave", closeMouth);



function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}