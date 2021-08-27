console.info('game is running ...')

// CONSTANTS
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const NANONAUT_WIDTH = 181;
const NANONAUT_HEIGHT = 229;
const GROUND_Y = 540;

// SETUP
const canvas = document.createElement('canvas');
const c = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

const nanonautImage = new Image();
nanonautImage.src = 'imgs/nanonaut.png';
const nanonautX = 50, nanonautY = 40;

window.addEventListener('load',start);

function start(){
    window.requestAnimationFrame(mainLoop);
}

// MAIN LOOP
const mainLoop = () => {
    update();draw();
    window.requestAnimationFrame(mainLoop);
}

// PLAYER INPUT

// UPDATING
function update(){
    
}

// DRAWING
function draw(){
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    c.drawImage(nanonautImage,nanonautX,nanonautY);
}