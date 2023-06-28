const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE:9,
    R_WIDTH: 1/4,
    R_HEIGHT: 1/3,
    // R_WIDTH: 1,
    // R_HEIGHT: 1,
}


window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    canvasEl.style.width = `${GameViewport.WIDTH * GameViewport.SCALE * GameViewport.R_WIDTH}px`;
    canvasEl.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE * GameViewport.R_HEIGHT}px`;

    const ryu = document.querySelector('img');

    const position = {
        x: 0,
        y: 0,
    }

    function frame(){
        position.x += 1;

        context.strokeStyle = 'black';
        context.moveTo(0,0);
        context.lineTo(GameViewport.WIDTH,GameViewport.HEIGHT);
        context.moveTo(GameViewport.WIDTH,0);
        context.lineTo(0,GameViewport.HEIGHT);
        context.stroke();

        context.drawImage(ryu,position.x,position.y);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}
