const Questions = require('../Questions');
const Timer = require('./Timer');

class Game {
  constructor({ partyID, emitter }) {
    this.questions = new Questions();
    this.emitter = emitter;
    this.index = 0;
    this.questionInterval = undefined;
    this.secondsInterval = undefined;
    this.currentQuestion = this.questions.getQuestion(this.index % this.questions.questionsCount);
    this.playerCount = 0;

    console.info('creating game with ID: ', partyID);

    this.startGame();
  }

  tickCallback = (seconds) => {
    this.emitter.emit(
      'SET_SECONDS',
      seconds
    );
  };

  endGameTimeout = () => {
    this.stop();

    this.emitter.emit('END_GAME');
  }

  startGame = () => {
    this.timer = new Timer({ tickCallback: this.tickCallback, emitQuestion: this.emitQuestion });

    this.timer.start();
    const oneMinMs = 1000 * 60;
    const tenMinsMs = oneMinMs * 10;
    setTimeout(this.endGameTimeout, tenMinsMs);
  }

  emitPlayerCount = () => {
    this.emitter.emit('PLAYER_COUNT', this.playerCount);
  }

  incrementPlayerCount = () => {
    this.playerCount += 1;
    this.emitPlayerCount();
  }

  decrementPlayerCount = () => {
    this.playerCount -= 1;
    this.emitPlayerCount();
  }

  incrementIndex = () => {
    this.index += 1;
  }

  emitQuestion = () => {
    this.currentQuestion = this.questions.getQuestion(this.index % this.questions.questionsCount);

    this.emitter.emit(
      'NEXT_QUESTION',
      this.currentQuestion
    );

    this.incrementIndex();
  }

  emitCurrentQuestion = () => {
    this.emitter.emit(
      'CURRENT_QUESTION',
      this.currentQuestion
    );

    this.incrementIndex();

    if (this.timer.paused) {
      this.emitter.emit(
        'PAUSED'
      );
    }

    this.tickCallback(this.timer.secondsRemaining);
  }

  skipQuestion = () => {
    this.incrementIndex();

    this.timer.restart();

    this.emitter.emit(
      'RESUMED'
    );
  }

  pause = () => {
    this.emitter.emit(
      'PAUSED'
    );

    this.timer.pause();
  }

  resume = () => {
    this.emitter.emit(
      'RESUMED'
    );

    this.timer.resume();
  }

  stop = () => {
    this.timer.stop();
  }
}

module.exports = Game;
