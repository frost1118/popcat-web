const cat = document.getElementById("popcat");
const audio = document.getElementById("popsound");

function press(event) {
    cat.src="src/img/popcat_click.png";
    audio.src="src/audio/click.mp3";
    audio.play();
}

function release(event) {
    cat.src="src/img/popcat_default.png";
}

cat.addEventListener("mousedown", press);
cat.addEventListener("mouseup", release);