/*
Given an age in seconds, calculate how old someone would be on:

Earth: orbital period 365.25 Earth days, or 31557600 seconds
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
*/

export const age = (planet, sec) => {
  const orbitLength = 31557600 * ((p) => {
    switch (p) {
      case ('mercury'):
        return 0.2408467;
      case ('venus'):
        return 0.61519726;
      case ('mars'):
        return 1.8808158;
      case ('jupiter'):
        return 11.862615;
      case ('saturn'):
        return 29.447498;
      case ('uranus'):
        return 84.016846;
      case ('neptune'):
        return 164.79132;
      default:
        return 1;
    }
  })(planet);
  return Math.round((sec / orbitLength) * 100) / 100;
};