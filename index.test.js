const FizzBuzzJazz = require('./fizzbuzz');
const arrExpect = [
  1, 2, "Fizz", 4, "Buzz", "Fizz","Jazz", 8, "Fizz", "Buzz",
  11, "Fizz", 13, "Jazz", "FizzBuzz", "Buzz", 16, 17, "Fizz",
  19, "Buzz", "FizzJazz"
];


describe('WillDom FizzBuzzJazz', () => {
  test('FizzBuzzJazz to 21', () => {
    expect(FizzBuzzJazz(21)).toEqual(
      expect.arrayContaining(arrExpect),
    );
  });
});

