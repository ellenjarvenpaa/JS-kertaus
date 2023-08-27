'use strict';

const numbers = [];

const n1 = prompt('Enter a number');
const n2 = prompt('Enter a number');
const n3 = prompt('Enter a number');
const n4 = prompt('Enter a number');
const n5 = prompt('Enter a number');
numbers.push(n1, n2, n3, n4, n5);

document.getElementById('kohde').innerHTML = numbers;

const n6 = prompt('Enter a number to search');
if (numbers.includes(n6)) {
  alert('Number already exists');
} else {
  alert('Number accepted');
  numbers.push(n6);
}

numbers.pop();

document.getElementById('kohde2').innerHTML = numbers;

numbers.sort((a, b) => a - b);
document.getElementById('kohde3').innerHTML = numbers;
