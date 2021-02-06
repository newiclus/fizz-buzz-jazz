const FizzBuzzJazz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let num = '';

    if (i % 3 === 0) {
      num+='Fizz';
    }

    if (i % 5 === 0) {
      num+='Buzz';
    }

    if (i % 7 === 0) {
      num+='Jazz';
    }

    if (num !== '') {
      result.push(num);
    } else {
      result.push(i);
    }
  }
  
  return result;
}

module.exports = FizzBuzzJazz;