/*
Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.
*/

function isShouting(input) {
  return input.toUpperCase() === input && input.toLowerCase() !== input;
}

export const hey = (message) => {
  const str = message.trim();
  const shouting = isShouting(str);
  const question = str.endsWith('?');

  switch (true) {
    case (str.length === 0):
      return 'Fine. Be that way!';
    case (shouting && question):
      return 'Calm down, I know what I\'m doing!';
    case (shouting):
      return 'Whoa, chill out!';
    case (question):
      return 'Sure.';
    default:
      return 'Whatever.';
  }
};
