'use strict';

const number = +prompt('Enter a positive number');

for (let i = number; i != 0; i += i) {
  console.log(i);
}
