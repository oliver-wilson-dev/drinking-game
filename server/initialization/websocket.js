const Server = require('../Server');

const { io } = Server;

const websocket = () => {
  io.on('connection', (socket) => {
    socket.join(socket.handshake.query.partyID);
  });
};

module.exports = websocket;
