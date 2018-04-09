import pop from "../../pop/index.js";
const { math, TileSprite, Texture } = pop;

const BONUS_WORD = "jackpots";
const texture = new Texture("res/images/Jackpots.png");

class Jackpot extends TileSprite {
  constructor () {
    super(texture, 32, 32);
    this.name = BONUS_WORD;
    this.scale = { x:1, y:1};
    this.letter = math.randOneFrom(BONUS_WORD.split(""));
    this.frame.x = BONUS_WORD.indexOf(this.letter);
  }
}

Jackpot.BONUS_WORD = BONUS_WORD;

export default Jackpot;
