var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_X, last_Y;
var color="red";
var width=2;
canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
mouseEvent="mousedown";
mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
 }
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseEvent="mouseup";
 }
 canvas.addEventListener("mouseleave",mouse_leave);
 function mouse_leave(e){
     mouseEvent="mouseleave";
 }
 canvas.addEventListener("mousemove",mouse_move);
 function mouse_move(e){
var currentX=e.clientX-canvas.offsetLeft;
var currentY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x,mouse_y,40, 0, 2 * Math.PI);
    ctx.stroke(); 
}
last_X=currentX;
last_Y=currentY;
 }
 