const { questions } = require('./constants');

class Questions {
  constructor() {
    this.questions = [...questions];
    this.questionsCount = this.questions.length;
  }

  getQuestion = (index) => this.questions[index]
}

module.exports = Questions;
