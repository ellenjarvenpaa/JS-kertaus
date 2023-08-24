'use strict';

const number = +prompt('Enter a positive number');
let sum = 0;

for (let i = number; i > 0; i -= 1) {
  sum += i;
}

document.getElementById('kohde').innerHTML = sum;
