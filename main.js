var mouseEvent = "empty";

var lastx, lasty;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

widthofline = 2;

canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e) {
    // Additional Activity start
    color = document.getElementById("color").value;
    widthofline = document.getElementById("wol").value;
    // Additional Activity ends

    mouseEvent = "mouseDown";
};

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log("Last position of X and Y coordinates here:");
        console.log("X = " + lastx + ". Y = " + lasty);
        ctx.moveTo(lastx, lasty);

        console.log("Current posotion of X and Y coordinates here:");
        console.log("X = " + currentx + ". Y = " + currenty);
        ctx.lineTo(currentx, currenty);

        ctx.stroke();
    };

    lastx = currentx;

    lasty = currenty;
};

canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUp";
};

canvas.addEventListener("mouseLeave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
};

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}