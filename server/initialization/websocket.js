const Server = require('../Server');
const GamesManager = require('../GamesManager');

const { io } = Server;

const websocket = () => {
  io.on('connection', (socket) => {
    socket.join(socket.handshake.query.partyID);

    socket.on('JOIN_GAME', ({ partyID }) => {
      console.log('socket on JOIN_GAME');
      GamesManager.getGame({ partyID }).emitCurrentQuestion();
    });

    socket.on('SKIP_QUESTION', ({ partyID }) => {
      GamesManager.getGame({ partyID }).skipQuestion();
    });
  });
};

module.exports = websocket;
