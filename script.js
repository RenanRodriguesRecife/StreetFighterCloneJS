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

    const [ryu, background] = document.querySelectorAll('img');

    const position = {
        x: 0,
        y: 110,
    }

    let velocity = 1;

    function frame(){
        position.x += velocity;

        if (position.x > GameViewport.WIDTH - ryu.width|| position.x < 0){
            velocity = -velocity;
        }

        context.drawImage(background,0,0);

        // context.clearRect(0,0,GameViewport.WIDTH,GameViewport.HEIGHT);

        // context.strokeStyle = 'black';
        // context.moveTo(0,0);
        // context.lineTo(GameViewport.WIDTH,GameViewport.HEIGHT);
        // context.moveTo(GameViewport.WIDTH,0);
        // context.lineTo(0,GameViewport.HEIGHT);
        context.stroke();

        context.drawImage(ryu,position.x,position.y);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}
