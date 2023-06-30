import { drawRyu,updateRyu} from "./ryu.js"
import { drawBackground } from "./stage.js";

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

    
 
    function frame(){

        updateRyu(context);
        drawBackground(context);
        drawRyu(context);
        
  
        context.stroke();

        

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}
