console.info('ninja is running ...')

let x =0,y=40;

const image = new Image();
image.src = 'imgs/nanonaut.png';

const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const c = canvas.getContext('2d');

window.addEventListener('load',start);

function start(){
    window.requestAnimationFrame(loop);
}

const loop = () => {
    c.clearRect(0,0,800,600);
    c.drawImage(image,x,y);
    x++;
    window.requestAnimationFrame(loop);
}