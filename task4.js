export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp() {
    this.level += 1;
  }
}
const player = new Player("Tara", 6);
player.levelUp();
player.info();
