const Server = require('../Server');
const GamesManager = require('../GamesManager');

const { io } = Server;

const websocket = () => {
  io.on('connection', (socket) => {
    console.log('connection', socket.id);

    socket.on('JOIN_GAME', ({ partyID }) => {
      socket.join(partyID);
      const game = GamesManager.getGame({ partyID });

      game.emitCurrentQuestion();

      game.incrementPlayerCount();
    });

    socket.on('SKIP_QUESTION', ({ partyID }) => {
      GamesManager.getGame({ partyID }).skipQuestion();
    });

    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.on('disconnect', (reason) => {
      // ...
    });
  });
};

module.exports = websocket;
