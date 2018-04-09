import pop from "../../pop/index.js";
const { TileSprite, Texture } = pop;

const texture = new Texture("res/images/coin.png");

class Cute extends TileSprite {
  constructor(controls) {
    super(texture, 16, 16);
    this.controls = controls;

    const { anims } = this;
    anims.add("walk", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(x => ({ x, y: 0 })), 0.1);
    anims.play("walk");

    this.speed = 0.15;
    this.dir = {
      x: 1,
      y: 0
    };
    this.nextCell = this.speed;
  }

  update(dt) {
    super.update(dt);

    const { pos, controls, speed, dir } = this;
    super.update(dt);

    if ((this.nextCell -= dt) <= 0) {
      this.nextCell += speed;
      const { x, y } = controls;
      if (x && x !== dir.x) {
        dir.x = x;
        dir.y = 0;
        pos.y = Math.round(pos.y / 32) * 32;
      } else if (y && y !== dir.y) {
        dir.x = 0;
        dir.y = y;
        pos.x = Math.round(pos.x / 32) * 32;
      }
    }

    pos.x += dir.x * dt * (32 / speed);
    pos.y += dir.y * dt * (32 / speed);
  }
}

export default Cute;
