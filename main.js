canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="green";
var width_of_line=2;
var radius=5;

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent= "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent= "mouseup";
}

function my_movemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientX - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates";
    console.log("x = "+ current_position_of_mouse_x+"y ="+ current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
     ctx.leneWidth = width_of_line;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
    }

}

function my_moveleave(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientX - canvas.offsetTop;

    if (mouseEvent == "mouseleave") {
    console.log("Current position of x and y coordinates";
    console.log("x = "+ current_position_of_mouse_x+"y ="+ current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
     ctx.leneWidth = width_of_line;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
    }

}