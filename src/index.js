console.info('game is running ...')

// CONSTANTS
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const NANONAUT_WIDTH = 181;
const NANONAUT_HEIGHT = 229;
const GROUND_Y = 540;
const NANONAUT_Y_ACCELERATION = 1;

// SETUP
const canvas = document.createElement('canvas');
const c = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
let nanonautX = 50, nanonautY = 40, nanonautYSpeed = 0;
document.body.appendChild(canvas);

const nanonautImage = new Image();
nanonautImage.src = './imgs/nanonaut.png';

const backgroundImage = new Image();
backgroundImage.src = './imgs/background.png';

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
    nanonautY+=nanonautYSpeed;
    nanonautYSpeed += NANONAUT_Y_ACCELERATION;
    if(nanonautY > (GROUND_Y - NANONAUT_HEIGHT)) 
    {   
        nanonautY= GROUND_Y - NANONAUT_HEIGHT;
        nanonautYSpeed =0;
    }
}

// DRAWING
function draw(){
    // c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // Draw the sky
    c.fillStyle = "LightSkyBlue";
    c.fillRect(0,0, CANVAS_WIDTH, GROUND_Y - 40);
    
    c.drawImage(backgroundImage,0,-210);
    
    // Draw the ground.
    c.fillStyle = "ForestGreen";
    c.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40)

    c.drawImage(nanonautImage,nanonautX,nanonautY);
}