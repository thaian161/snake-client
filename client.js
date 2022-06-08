const net = require('net');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //event handlers
  conn.on('connect', () => {
    // code that does something when the connection is first established
    console.log('Welcome To The Jungle 🌿🐒🦜🐊🐘🌺!!!');
  });

  //Handling message from the server and console.log it out on terminal
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
