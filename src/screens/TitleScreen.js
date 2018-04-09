import pop from "../../pop/index.js";
const { Container, Text } = pop;
import Squizz from "../entities/Squizz.js";
import Pickup from "../entities/Pickup.js";
import Level from "../Level.js";

class TitleScreen extends Container {
  constructor(game, controls, onStart) {
    super();
    this.onStart = onStart;
    this.controls = controls;
    controls.reset();

    const drawText = (msg, pos, size = 24) => {
      const font = `${size}pt 'VT323', monospace`;
      const text = new Text(msg, { font: font, fill: "#111" });
      text.pos = pos;
      return this.add(text);
    };

    const addIcon = (type, x, y) => {
      const icon = this.add(new Pickup(type));
      icon.liveForever = true;
      icon.pos.x = x;
      icon.pos.y = y;
    };

    this.add(new Level(game.w, game.h));

    this.title = drawText("Happyball", { x: 130, y: 100 }, 30);

    drawText("Fill up the screen!", { x: 120, y: 200 });
    drawText("Jewels go fast, and...", { x: 120, y: 250 });
    drawText("Bows are power, but...", { x: 120, y: 300 });
    drawText("Avoid death at all cost.", { x: 120, y: 350 });

    const fakeControls = {
      x: 0,
      y: 0,
      action: false
    };
    const squizz = this.add(new Squizz(fakeControls));
    squizz.update = () => {};
    squizz.pos = { x: 90, y: 200 };

    addIcon("shoes", 90, 250);
    addIcon("bomb", 90, 300);
    addIcon("death", 90, 350);
  }

  update(dt, t) {
    super.update(dt, t);
    const { title, controls } = this;
    title.pos.y += Math.sin(t / 0.3) * 0.3;
    title.pos.x += Math.cos(t / 0.25) * 0.3;
    if (controls.action) {
      this.onStart();
    }
  }
}

export default TitleScreen;
