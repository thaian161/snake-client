//Key input from user import from constant.js
const {
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
} = require('./constant');

// Stores the active TCP connection object.
let connection;
const connect = require('./client');

// setup interface to handle user input from stdin
/*We setup our stdin by creating two functions in play.js:
      setupInput
      handleUserInput
These help us establish our UI (user interface) where players can send keyboard commands which we will soon use to control the snake.*/
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //The listener will use a function called handleUserInput that runs when you receive input from your keyboard.
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //if user pressed CTRL+C => exit the game
  if (key === '\u0003') {
    process.exit();
  }

  //make the snake auto move up using setInterval
  if (key === moveUp || key === arrowMoveUp) {
    connection.write('Move: up');
  }
  if (key === moveLeft || key === arrowMoveLeft) {
    connection.write('Move: left');
  }
  if (key === moveDown || key === arrowMoveDown) {
    connection.write('Move: down');
  }
  if (key === moveRight || key === arrowMoveRight) {
    connection.write('Move: right');
  }
};

//setupInput();

module.exports = { setupInput };
