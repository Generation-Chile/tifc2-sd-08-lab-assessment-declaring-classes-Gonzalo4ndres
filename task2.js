export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }
}
const player = new Player("Test Player", 5);
console.log(player.name);
console.log(player.level)