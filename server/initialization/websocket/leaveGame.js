const GamesManager = require('../../GamesManager');
const UserManager = require('../../UserManager');

const leaveGame = ({ socket }) => {
  const user = UserManager.getUser({ id: socket.id });

  if (user) {
    const { partyID } = user;

    const game = GamesManager.getGame({ partyID });

    if (game) {
      game.decrementPlayerCount();
    }

    UserManager.removeUser({ id: socket.id });
  }
};

module.exports = leaveGame;
