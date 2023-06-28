const GameViewport = {
    WIDTH: 324,
    HEIGHT: 224,
    SCALE: 2,
}


window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    canvasEl.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
    canvasEl.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;


    console.log(context)
}