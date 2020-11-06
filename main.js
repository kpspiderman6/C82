canvas = document.getElementById("circlecanvas");
ctx = canvas.getContext("2d");
color = "purple";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousex = e.clientX-canvas.offsetLeft;
    mousey = e.clientY-canvas.offsetTop;
    console.log(mousex);
    console.log(mousey);
    drawcircle(mousex,mousey);
}
function drawcircle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
    

}