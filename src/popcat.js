const mcat = document.getElementById("mpopcat");
const maudio = document.getElementById("mpopsound");
const dcat = document.getElementById("dpopcat");
const daudio = document.getElementById("dpopsound");
const image = document.querySelector("img");

image.oncontextmenu=function(){
    return false;
}

function mpress(event) {
    mcat.src="src/img/popcat_click.png";
    maudio.src="src/audio/click.mp3";
    maudio.play();
}

function mrelease(event) {
    mcat.src="src/img/popcat_default.png";
}

function dpress(event) {
    dcat.src="src/img/popcat_click.png";
    daudio.src="src/audio/click.mp3";
    daudio.play();
}

function drelease(event) {
    dcat.src="src/img/popcat_default.png";
}

mcat.addEventListener("touchstart", mpress);
mcat.addEventListener("touchend", mrelease);
dcat.addEventListener("mousedown", dpress);
dcat.addEventListener("mouseup", drelease);