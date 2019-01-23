/*
Given a word and a list of possible anagrams, select the correct sublist.

Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

function sortWord(str) {
  return str.toLowerCase().split('').sort().join('');
}

export default class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(arr) {
    const sortedSubject = sortWord(this.subject);
    return arr.filter(w => this.subject.toLowerCase() !== w.toLowerCase()
      && sortWord(w) === sortedSubject);
  }
}