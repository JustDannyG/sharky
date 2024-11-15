let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); 
}

window.addEventListener("keydown", (event) => {

    if (event.key === "w" || event.key === "W") keyboard.up = true;
    if (event.key === "a" || event.key === "A") keyboard.left = true;
    if (event.key === "s" || event.key === "S") keyboard.down = true;
    if (event.key === "d" || event.key === "D") keyboard.right = true;
    if (event.key === " ") keyboard.space = true;
});

window.addEventListener("keyup", (event) => {

    if (event.key === "w" || event.key === "W") keyboard.up = false;
    if (event.key === "a" || event.key === "A") keyboard.left = false;
    if (event.key === "s" || event.key === "S") keyboard.down = false;
    if (event.key === "d" || event.key === "D") keyboard.right = false;
    if (event.key === " ") keyboard.space = false;
});
