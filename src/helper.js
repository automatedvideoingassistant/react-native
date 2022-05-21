import {  Dimensions } from "react-native";

export const BB = (detections, ctx, canvas) => {
    const { wwidth, wheight } = Dimensions.get('screen');
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    detections.forEach(prediction=>{

        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];
        const score = Math.round((prediction['score']+Number.EPSILON)*100);

        const color = 'blue'
        ctx.strokeStyle = color;
        ctx.font = '18px Tahoma';
        ctx.fillStyle = color;
        ctx.transform(-1, 0, 0, 1, 410, 0);
        ctx.beginPath();
        ctx.rect(x,y,width,height);
        ctx.fillText(text,x,y-5);
        ctx.stroke();
    })
}