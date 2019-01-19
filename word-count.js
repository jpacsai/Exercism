/*
Given a phrase, count the occurrences of each word in that phrase.

For example for the input "olly olly in come free"

olly: 2
in: 1
come: 1
free: 1

*/

class Words {
  constructor() {
    this.counted = {};
  }

  count(str) {
    const obj = {};
    const arr = str.trim().toLowerCase().split(/[\s|\n]+/);
    for (let w = 0; w < arr.length; w += 1) {
      const countedWords = Object.keys(obj);
      if (countedWords.includes(arr[w])) {
        obj[arr[w]] += 1;
      } else {
        obj[arr[w]] = 1;
      }
    }
    this.counted = obj;
    return this.counted;
  }
}

export default Words;