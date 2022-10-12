const User = require('../User');

class UserManager {
  constructor() {
    this.users = {};
  }

  createUser = ({ id, partyID }) => {
    const game = this.users[partyID];

    if (!game) {
      this.users[id] = new User({ id, partyID });
    }
  }

  removeUser = ({ id }) => {
    this.users[id] = undefined;
  }

  getUser = ({ id }) => this.users[id]
}

module.exports = new UserManager();
