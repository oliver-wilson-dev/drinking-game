const Questions = require('../Questions');

class Game {
  constructor({ partyID, emitter }) {
    this.questions = new Questions();
    this.emitter = emitter;
    this.index = 0;
    this.questionInterval = undefined;
    this.secondsInterval = undefined;
    this.currentQuestion = undefined;
    this.seconds = 10;

    console.info('creating game with ID: ', partyID);

    this.loopThroughQuestions();
  }

  emitCurrentQuestion = () => {
    console.log('emitting current question: ', this.currentQuestion);
    this.emitter.emit(
      'CURRENT_QUESTION',
      this.currentQuestion
    );
  }

  incrementIndex = () => {
    this.index += 1;
  }

  emitQuestion = (index) => {
    this.currentQuestion = this.questions.getQuestion(index);

    this.emitter.emit(
      'NEXT_QUESTION',
      this.currentQuestion
    );

    this.countdown(10);

    this.incrementIndex();
  }

  countdown = (startSeconds) => {
    this.seconds = startSeconds;

    if (this.secondsInterval) {
      clearInterval(this.secondsInterval);
    }

    const tick = () => {
      this.emitter.emit(
        'SET_SECONDS',
        this.seconds
      );

      this.seconds -= 1;
    };

    tick();

    this.secondsInterval = setInterval(tick, 1000);

    if (this.seconds === 0) {
      console.log('clearing seconds interval');
      clearInterval(this.secondsInterval);
    }
  }

  loopThroughQuestions = () => {
    const emitQuestion = () => {
      this.emitQuestion(this.index % this.questions.questionsCount);
    };

    emitQuestion();

    this.questionInterval = setInterval(() => {
      emitQuestion();
    }, 10000);
  }

  skipQuestion = () => {
    // stop current ticker
    clearInterval(this.questionInterval);

    this.incrementIndex();

    // continue looping
    this.loopThroughQuestions();
  }
}

module.exports = Game;
