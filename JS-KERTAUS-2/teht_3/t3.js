'use strict';

const numbers = [];
let jatka = true;

while (jatka) {
  const input = prompt('Enter a number or "done" to finish');
  if (input === 'done') {
    jatka = false;
  }
  numbers.push(input);
}

for (const number of numbers) {
  if (number % 2 === 0) {
    document.getElementById('kohde').innerHTML = number.join(', ');
  }
}
