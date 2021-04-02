const Server = require('../../Server');
const GamesManager = require('../../GamesManager');
const UserManager = require('../../UserManager');
const leaveGame = require('./leaveGame');

const { io } = Server;

const websocket = () => {
  io.on('connection', (socket) => {
    socket.on('JOIN_GAME', ({ partyID }) => {
      socket.join(partyID);

      UserManager.createUser({ id: socket.id, partyID });

      const game = GamesManager.getGame({ partyID });

      if (game) {
        game.emitCurrentQuestion();

        game.incrementPlayerCount();
      } else {
        socket.emit('GAME_UNDEFINED');
      }
    });

    socket.on('END_GAME', ({ partyID }) => {
      const game = GamesManager.getGame({ partyID });
      if (game) {
        game.stop();
        GamesManager.removeGame({ partyID });
      }
    });

    socket.on('SKIP_QUESTION', ({ partyID }) => {
      GamesManager.getGame({ partyID }).skipQuestion();
    });

    socket.on('PAUSE_GAME', ({ partyID }) => {
      GamesManager.getGame({ partyID }).pause();
    });

    socket.on('RESUME_GAME', ({ partyID }) => {
      GamesManager.getGame({ partyID }).resume();
    });

    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.on('LEAVE_GAME', () => {
      leaveGame({ socket });
    });

    socket.on('disconnect', () => {
      leaveGame({ socket });
    });
  });
};

module.exports = websocket;
