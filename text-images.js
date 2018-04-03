
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
console.log(ctx.canvas);
ctx.fillStyle = "#555";
ctx.strokeStyle = "red";
ctx.font = "20pt courier";
const center = w / 2;
ctx.textAlign = "center";
for (let i = 0; i < 80; i++) {
ctx.fillText("if you're in the game", center, i * 20);
ctx.strokeText("strokes the word", center, h - 30);
}
const img = new Image();
img.src = "res/images/goldfish.png";
img.addEventListener("load", draw, false);
function draw() {
for (let i = 0; i < 95; i++) {
const x = Math.random() * w;
const y = Math.random() * h;
let scale = Math.random();
ctx.drawImage(img, 170, 140);
// Draw cropped images
for (let i = 0; i < 22; i++) {
ctx.drawImage(
img,
// source
32, 0, 53, 75,
// destination location
i * 20, i * 10,
// destination scale
i * 0.2 * 53, i * 0.2 * 75
);
}
}
}
