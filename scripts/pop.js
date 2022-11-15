
const popcat = document.querySelector("#popcat");

const openMouthImg = "/images/open.png";
const closeMouthImg = "/images/close.png";


const openMouthSound = new Audio("/sounds/open1.mp3");
const closeMouthSound = new Audio("/sounds/close1.mp3");


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