'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

function sortArray(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers;
}

sortArray(numbers);

console.log(numbers);
