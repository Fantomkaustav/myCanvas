canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2D");
color = "aqua";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2.5;
ctx.rect(200, 300, 40, 35);
ctx.stroke();
ctx.fill(color);
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X=" + mouse_x + "Y=" + mouse_y);
    rectangle(mouse_x, mouse_y)
}

function rectangle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.rect(mouse_x, mouse_y, 40, 35);
    ctx.stroke();
    ctx.fill(color);
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}