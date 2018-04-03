const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
console.log(ctx.canvas);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = "#555";
let x, y, radius;
for (let i = 0; i < 899; i++) {
x = Math.random() * w;
y = Math.random() * h;
radius = Math.random() * 3;
// draw the star!
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, false);
ctx.fill();

}
