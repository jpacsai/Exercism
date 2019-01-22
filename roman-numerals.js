/*
Write a function to convert from normal numbers to Roman Numerals.

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

 1  => I
10  => X
 7  => VII
There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII

See also: http://www.novaroma.org/via_romana/numbers.html
*/

export function toRoman(num) {
  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = Math.floor((num % 10));

  const values = [
    {
      digit: thousands,
      roman: 'M'.repeat(thousands),
    },
    {
      digit: hundreds,
      roman: '',
      10: 'M',
      5: 'D',
      1: 'C',
    },
    {
      digit: tens,
      roman: '',
      10: 'C',
      5: 'L',
      1: 'X',
    },
    {
      digit: ones,
      roman: '',
      10: 'X',
      5: 'V',
      1: 'I',
    },
  ];

  const arr = values.map((d) => {
    if (d.roman === '' && d.digit > 0) {
      switch (true) {
        case (d.digit === 9):
          return `${d[1]}${d[10]}`;
        case (d.digit > 5):
          return `${d[5]}${d[1].repeat(d.digit - 5)}`;
        case (d.digit === 5):
          return d[5];
        case (d.digit === 4):
          return `${d[1]}${d[5]}`;
        default:
          return d[1].repeat(d.digit);
      }
    } else {
      return d.roman;
    }
  });

  return arr.join('');
}