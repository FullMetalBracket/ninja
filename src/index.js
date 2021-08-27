console.info('ninja is running ...')

const image = new Image();
image.src = 'imgs/nanonaut.png';

window.addEventListener('load',start);

function start(){
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    const c = canvas.getContext('2d');
    c.fillStyle = 'green';
    c.fillRect(10,10,30,30); 
    document.body.appendChild(canvas);
    c.drawImage(image,20,40);
}