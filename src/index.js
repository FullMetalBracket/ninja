console.info('game is running ...')

// CONSTANTS
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BACKGROUND_WIDTH = 1000;
const NANONAUT_WIDTH = 181;
const NANONAUT_HEIGHT = 229;
const GROUND_Y = 540;
const NANONAUT_Y_ACCELERATION = 1;
const SPACE_KEYCODE = 32;
const NANONAUT_JUMP_SPEED = 20;
const NANONAUT_X_SPEED = 5;
const NANONAUT_NR_FRAMES_PER_ROW = 5;
const NANONAUT_NR_ANIMATION_FRAMES = 7;

// SETUP
const canvas = document.createElement('canvas');
const c = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
let nanonautX = CANVAS_WIDTH / 2, nanonautY = GROUND_Y - NANONAUT_HEIGHT, 
    nanonautYSpeed = 0, nanonautIsInAir = false;
let spaceKeyIsPressed = false;
let nanonautFrameNr = 0;
let nanonautAnimationCounter = 0;
let cameraX = 0, cameraY = 0;

document.body.appendChild(canvas);

const nanonautImage = new Image();
nanonautImage.src = './imgs/animatedNanonaut.png';

const backgroundImage = new Image();
backgroundImage.src = './imgs/background.png';

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);
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

    nanonautX += NANONAUT_X_SPEED;

    if(spaceKeyIsPressed && !nanonautIsInTheAir) 
    {   
        nanonautYSpeed = -NANONAUT_JUMP_SPEED;
        nanonautIsInTheAir = true;
    }

    nanonautY+=nanonautYSpeed;
    nanonautYSpeed += NANONAUT_Y_ACCELERATION;

    if(nanonautY > (GROUND_Y - NANONAUT_HEIGHT)) 
    {   
        nanonautY= GROUND_Y - NANONAUT_HEIGHT;
        nanonautYSpeed =0;
        nanonautIsInTheAir = false;
    }
}

// DRAWING
function draw(){
    // c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // Draw the sky
    c.fillStyle = "LightSkyBlue";
    c.fillRect(0,0, CANVAS_WIDTH, GROUND_Y - 40);
    
    // move background with camera
    let backgroundX = -(cameraX % BACKGROUND_WIDTH);
    c.drawImage(backgroundImage, backgroundX, -210);
    c.drawImage(backgroundImage, backgroundX + BACKGROUND_WIDTH, -210);
    
    // Draw the ground.
    c.fillStyle = "ForestGreen";
    c.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40)

    //transform world space into screen space
    let nanonautSpriteSheetRow = Math.floor(nanonautFrameNr / NANONAUT_NR_FRAMES_PER_ROW);
    var nanonautSpriteSheetCol = nanonautFrameNr % NANONAUT_NR_FRAMES_PER_ROW;
    var nanonautSpriteSheetX = nanonautSpriteSheetCol * NANONAUT_WIDTH;
    var nanonautSpriteSheetY = nanonautSpriteSheetRow * NANONAUT_HEIGHT;
    c.drawImage(nanonautImage, nanonautSpriteSheetX, nanonautSpriteSheetY, NANONAUT_WIDTH, NANONAUT_HEIGHT, 
        nanonautX - cameraX, nanonautY - cameraY, NANONAUT_WIDTH, NANONAUT_HEIGHT);
    //c.drawImage(nanonautImage, nanonautX - cameraX, nanonautY - cameraY);

    nanonautAnimationCounter++;
    if(nanonautAnimationCounter >= 5){
        nanonautFrameNr = nanonautFrameNr + 1;
        if(nanonautFrameNr >= NANONAUT_NR_ANIMATION_FRAMES) nanonautFrameNr = 0;
        nanonautAnimationCounter = 0;
    }
    
    // Update camera - place the camera so that it shows 150 pixels to the left of the Nanonaut
    cameraX = nanonautX - 150;
}

// FUNCTIONS
function onKeyDown(event){
    if(event.keyCode === SPACE_KEYCODE)spaceKeyIsPressed = true;
}

function onKeyUp(event){
    if(event.keyCode === SPACE_KEYCODE){
        spaceKeyIsPressed = false;
    }
}