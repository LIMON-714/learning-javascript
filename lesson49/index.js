// canvas

let can= document.getElementById('my-canvas');
let ctx=can.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = 'black'
ctx.strokeRect(10,10,380,280);

ctx.fillStyle ="green";
ctx.fillRect(12,12,378,276);


let centerX = can.width/2;
let centerY = can.height/2;

ctx.beginPath();
ctx.arc(centerX, centerY,80,0,2*Math.PI,false);
ctx.fillStyle= "red";
ctx.fill();

ctx.strokeStyle= "black";
ctx.stroke();



