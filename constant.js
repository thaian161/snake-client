const IP = '165.227.47.243';
const PORT = 50541;

//Key input from user
const moveUp = 'w';
const arrowMoveUp = '\u001B\u005B\u0041';
const moveDown = 's';
const arrowMoveDown = '\u001B\u005B\u0042';
const moveLeft = 'a';
const arrowMoveLeft = '\u001B\u005B\u0044';
const moveRight = 'd';
const arrowMoveRight = '\u001B\u005B\u0043';

//export constant
module.exports = {
  IP,
  PORT,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  arrowMoveDown,
  arrowMoveLeft,
  arrowMoveRight,
  arrowMoveUp,
};
