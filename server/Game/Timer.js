const secondsToMs = (seconds) => seconds * 1000;

class Timer {
  constructor({ tickCallback, emitQuestion }) {
    this.timerId = undefined;
    this.maxSeconds = 10;
    this.secondsRemaining = this.maxSeconds;
    this.paused = false;

    this.emitQuestion = emitQuestion;
    this.tickCallback = tickCallback;
  }

    tick = () => {
      if (this.secondsRemaining === -1) {
        // emit new question, reset remaining seconds
        this.secondsRemaining = this.maxSeconds;
        this.emitQuestion();
      } else {
        // emit seconds event
        this.tickCallback(this.secondsRemaining);
        this.secondsRemaining -= 1;
      }
    };

    pause = () => {
      clearInterval(this.timerId);
      this.paused = true;
    };

    resume = () => {
      this.paused = false;
      clearInterval(this.timerId);
      this.timerId = setInterval(this.tick, secondsToMs(1));
    };

    restart = () => {
      this.secondsRemaining = this.maxSeconds;
      this.emitQuestion();
      this.resume();
    }

    start = this.resume;

    stop = () => {
      clearInterval(this.timerId);
    }
}

module.exports = Timer;
