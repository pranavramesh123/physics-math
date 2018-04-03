
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
console.log(ctx.canvas);
// Draw the words as a mask
ctx.font = "bold 70pt monospace";
ctx.fillStyle = "black";
ctx.fillText("MOM", 10, 60);
ctx.fillText("POP", 10, 118);
ctx.globalCompositeOperation = "source-atop";
for (let i =0; i<6; i++) {
  ctx.fillStyle = `hsl(${i * (250/6)}, 90%, 55%)`;
  ctx.fillRect(0, i*20, 200, 20);
}

ctx.fillStyle = "#999";
ctx.globalCompositeOperation = "destination-over";
ctx.fillText("MOM", 13, 62);
ctx.fillText("POP", 13, 120);
ctx.font = "30pt monospace";
ctx.globalCompositeOperation = "source-over";
// Add characters (so they're evenly spaced)
"games".split("").forEach((ch, i) => {
ctx.fillText(ch, i * 37 + 12, 145);
});
