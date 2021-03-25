const Game = require('../Game');

class GamesManager {
  constructor() {
    this.games = {};
  }

  createGame = ({ partyID, emitter }) => {
    const game = this.games[partyID];

    if (!game) this.games[partyID] = new Game({ partyID, emitter });
  }

  removeGame = ({ partyID }) => {
    this.games[partyID] = undefined;
  }

  getGame = ({ partyID }) => this.games[partyID]
}

module.exports = new GamesManager();
