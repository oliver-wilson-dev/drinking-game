const Questions = require('../Questions');

class Game {
  constructor({ partyID, emitter }) {
    this.questions = new Questions();
    this.emitter = emitter;

    console.info('creating game with ID: ', partyID);

    this.loopThroughQuestions();
  }

  loopThroughQuestions = () => {
    let index = 0;
    setInterval(() => {
      this.emitter.emit('NEXT_QUESTION',
        this.questions.getQuestion(
          index % this.questions.questionsCount
        ));
      index += 1;
    }, 5000);
  }
}

module.exports = Game;
