/*
Manage a game player's High Score list.

Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score, the three highest scores, and a report on the difference between the last and the highest scores.
*/

export class HighScores {
  constructor(scores) {
    this.scores = scores;
    this.latest = this.scores[this.scores.length - 1];
    this.highest = Math.max(...this.scores);
    this.top = this.scores.slice(0).sort((a, b) => b - a).slice(0, 3);
    this.report = this.setReport();
  }

  setReport() {
    this.report = `Your latest score was ${this.latest}. That's ${this.latest < this.highest ? `${this.highest - this.latest} short of ` : ''}your personal best!`;
    return this.report;
  }
}