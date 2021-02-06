function fizzBuzzJazz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    // n % 3 === 0 --> 'Fizz'
    // n % 5 === 0 --> 'Buzz'
    // n % 7 === 0 --> 'Jazz'
    
    // n % 3 === 0 && n % 5 === 0 --> 'FizzBuzz'
    // n % 3 === 0 && n % 7 === 0 --> 'FizzJazz'
    // n % 5 === 0 && n % 7 === 0 --> 'BuzzJazz'
    // n % 3 === 0 && n % 5 === 0 && n % 7 === 0 --> 'FizzBuzzJazz'
    // --> n
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
  console.log('result: ', result);
  return result;
}

const input = document.querySelector('#inputNum');
const print = document.body.querySelector('#result');

input.addEventListener('change', (event) => {
  const value = parseInt(event.target.value);
  const arrResults = fizzBuzzJazz(value);
  let stringHTML = '';

  arrResults.forEach(item => {
    if (typeof item === 'string') {
      stringHTML+= `<span class="highlight">${item}</span><br />`;
    } else {
      stringHTML+= item + '<br />';
    }
  });

  print.innerHTML = stringHTML;
});
