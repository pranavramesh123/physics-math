
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
console.log(ctx.canvas);
// Game setup code
ctx.fillStyle = "#000";
ctx.globalAlpha = 0.02;
// Game setup code
function loopy (t) {
    requestAnimationFrame(loopy);
// Game logic code

ctx.save();
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = "#fff";
ctx.globalAlpha = 1;

const x = Math.random() * w;
const y = Math.random() * h;
const radius = Math.random() * 10;
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 5);
ctx.fill();
ctx.restore();
}
requestAnimationFrame(loopy); // Start things running!// Random circle
