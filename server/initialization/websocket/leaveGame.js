const GamesManager = require('../../GamesManager');
const UserManager = require('../../UserManager');

const leaveGame = ({ socket }) => {
  const user = UserManager.getUser({ id: socket.id });

  if (user) {
    const { partyID } = user;

    const game = GamesManager.getGame({ partyID });

    if (game) {
      game.decrementPlayerCount();
      if (game.playerCount < 1) {
        game.stop();
        GamesManager.removeGame({ partyID });
      }
    }

    UserManager.removeUser({ id: socket.id });
  }
};

module.exports = leaveGame;
